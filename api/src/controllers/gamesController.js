const axios = require("axios");
require("dotenv").config();
const apiKey = process.env.API_KEY;
const URL = `https://api.rawg.io/api/games?key=${apiKey}&page_size=40`;
const pageNum = 4;
//url api por id
//const URLID = `https://api.rawg.io/api/games/${id}?key=${apiKey}`;

//GET | /videogames
const allDataGames = async ()=> {

  let response = [];
  let allResponse = [];

  for (let i = 1; i < pageNum; i++) {
    response = await Promise.all([...response, axios.get(`${URL}&page=${i}`)])
  }
  //Petición para los primeros juegos
  //const response = await axios.get(URL);

  response.forEach(element => {
    allResponse = allResponse.concat(element.data.results);
  });

  const dataGames = allResponse.map(
    ({
      id,
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
    }) => ({
      id: id,
      name: name,
      description: description,
      platforms: platforms,
      image: background_image,
      released: released,
      rating: rating,
    })
  );
  //console.log(dataGames);
  //cantidad de juegos traídos
  //console.log(dataGames.length);

  return dataGames;
};


module.exports = { allDataGames } ;
