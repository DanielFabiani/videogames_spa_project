const axios = require("axios");
const apiKey = process.env.API_KEY;
const { Videogames, Genres } = require("../db")
const { Op } = require('sequelize');


const nameDataGames = async (name)=> {
  const URL = `https://api.rawg.io/api/games?search=${name}&key=${apiKey}&page_size=15`
/* 
  try {

    const response = await axios.get(URL);
    const apiData = response.data.results;

    //console.log(apiData);
    if (apiData) {
      const filterApiData = apiData.filter( (e) => e.name.includes(name))
      return filterApiData;
    }
    //db
    const dbData = await Videogames.findAll({
      where: {
        name: {
          // hace la comparación sin distinguir entre mayúsculas y minúsculas.
          [Op.iLike]: `%${name}%`,
        },
      },
      limit: 15,
    })
    //console.log(dbData);

    if(dbData.length === 0){
      throw new Error('No se encontraron videojuegos con este nombre en la BD')
    }
    return filterDbData;
  } catch (error) {
    throw new Error(error)
  }

 */
// ----------- mi código

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
      }) => ({
        id: id,
        name: name,
        //description: description,
        platforms: platforms.map(p => p.platform.name),
        image: background_image,
        released: released,
        rating: rating,
      })
      );
    
      console.log(apiData.length);
      //console.log(apiData);
      
    //busca en la Base de Datos donde la columna name contenga el string name
    const dbData = await Videogames.findAll({
      where: {
        name: {
          // hace la comparación sin distinguir entre mayúsculas y minúsculas.
          [Op.iLike]: `%${name}%`,
        },
      },
      limit: 15,
    })
    //console.log(dbData, 'NADA');

    //const filterDbData = dbData.filter(g => g.name.includes(name))

    //verifica si el arreglo está vacío, osea, si no se encontraron resultados en la API y en la Base de datos
    if (apiData.length === 0 && dbData.length === 0) {
      return { message: 'No se encontraron videojuegos con este nombre en la API ni en la DB' }
    } 
    
  // crea un array con los resultados encontrados tanto en la Api como la BD
    const totalData = [apiData, dbData];

    //console.log(totalData, 'API y DB');
    return totalData;
  } 
  catch (error) {
    throw new Error("Error al buscar los juegos en la API y la base de datos")
  }
}

module.exports = { nameDataGames };