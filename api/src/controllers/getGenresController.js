const axios = require("axios");
require("dotenv").config();
const apiKey = process.env.API_KEY;
const URL = `https://api.rawg.io/api/genres?key=${apiKey}`;
const { Genres } = require("../db");

const allGenres = async () => {

  const response = await axios.get(URL);
// array con todos los géneros
  const data = response.data.results;
  //console.log(dataGenres);
  const nameGenres = data.map(n => n.name);

// verifica que la tabla Genres esté vacía
  const genreCount = await Genres.count();
  if (genreCount === 0) {
    const genreData = nameGenres.map(name => ({ name }))
    await Genres.bulkCreate(genreData);
    console.log(genreData);
    return genreData;
  }

  console.log(data.length);
}

module.exports = allGenres;