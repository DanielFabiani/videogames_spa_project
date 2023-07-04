const axios = require("axios");
require("dotenv").config();
const apiKey = process.env.API_KEY;
const URL = `https://api.rawg.io/api/games?key=${apiKey}&page_size=40`;
const { Videogame, Genre } = require("../db");

const pageNum = 4;

//GET | /videogames
const allDataGames = async ()=> {

  let response = [];
  let allResponse = [];

  //recorro para traer las primeras 3 paginas con 40juegos c/u
  for (let i = 1; i < pageNum; i++) {
    response = await Promise.all([...response, axios.get(`${URL}&page=${i}`)])
  }
  //Petición para los primeros juegos
  //const response = await axios.get(URL);

  response.forEach(element => {
    allResponse = allResponse.concat(element.data.results);
  });

  // creo el objeto que voy a devolver por cada juego de la api
  const apiDataGames = allResponse.map(
    ({
      id,
      name,
      //description, llega en el detail
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
      genres: (genres.map((genre) => genre.name).join(' | ')),
    })
  );
  //console.log(apiDataGames);
  //cantidad de juegos traídos de la api
  //console.log(apiDataGames.length);

  //findAll para traer los juego de la base de datos
  const dbGames = await Videogame.findAll({
    include: [{
      model: Genre,
      attributes: ['name'],
      through: {
        attributes: []
      }
    }]
  })
  
  const dbDataGames = dbGames.map(({
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
    genres: (Genres.map(genre => genre.name).join(' | '))
  }))
  
  //console.log(dbDataGames);
  //console.log(dbDataGames.length);
  
  //concateno los dos arreglos para traer todos los juegos
  const allGames = apiDataGames.concat(dbDataGames);

  return allGames;
};

module.exports = { allDataGames } ;
