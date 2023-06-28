const axios = require("axios");
const apiKey = process.env.API_KEY;
const { Videogame, Genre } = require("../db")
const { Op } = require('sequelize');


const nameDataGames = async (name)=> {
  const URL = `https://api.rawg.io/api/games?search=${name}&key=${apiKey}&page_size=15`
  try {
    // busca en la api
    const response = await axios.get(URL);
    const apiData = response.data.results.map(
      ({
        id,
        name,
        //description,
        platforms,
        background_image,
        released,
        rating,
        genres
      }) => ({
        id: id,
        name: name,
        //description: description,
        platforms: platforms.map(p => p.platform.name),
        image: background_image,
        released: released,
        rating: rating,
        genres: genres.map(g => g.name)
      })
      );
    
      //console.log(apiData.length);
      //console.log(apiData);
      
    //busca en la Base de Datos donde la columna name contenga el string name, y sus géneros
    const dbData = await Videogame.findAll({
      where: {
        name: {
          // hace la comparación sin distinguir entre mayúsculas y minúsculas y espacios
          [Op.iLike]: `%${name}%`,
        },
      },
      include: [{
        model: Genre,
        attributes: ['name'],
        through: {
          attributes: []
        }
      }],
      limit: 15,
    })
    const dbDataGames = dbData.map(({
      id,
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
      Genres //nombre de la propiedad "Genres" para coincidir con la asociación en la consulta de la tabla
    }) => ({
      id: id,
      name: name,
      description: description,
      platforms: platforms,
      image: background_image,
      released: released,
      rating: rating,
      genres: Genres.map(genre => genre.name)
    }))

    //verifica si el arreglo está vacío, osea, si no se encontraron resultados en la API y en la Base de datos
    if (apiData.length === 0 && dbDataGames.length === 0) {
      return { message: 'No se encontraron videojuegos con este nombre en la API ni en la DB' }
    } 
    
  // crea un array con los resultados encontrados tanto en la Api como la BD
    const totalData = apiData.concat(dbDataGames);
    console.log(totalData.length, 'API y DB');

    return totalData;
  } 
  catch (error) {
    throw new Error("Error al buscar los juegos en la API y la base de datos")
  }
}

module.exports = { nameDataGames };