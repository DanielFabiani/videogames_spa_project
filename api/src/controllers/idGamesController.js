const axios = require("axios");
const apiKey = process.env.API_KEY;
const { Videogame, Genre } = require("../db");
//query de ejemplo url api por id
// 'https://api.rawg.io/api/games/3328?key=fad0d708958f4a0fb4a2da0317865dbd'

// Debe devuelve un objeto con la información pedida en el detalle de un videojuego

//GET | /videogames/:idVideogame
const idDataGames = async (id) => {
  if (id.length < 7 ) {
    const URL = `https://api.rawg.io/api/games/${id}?key=${apiKey}&page_size=40`;

    const response = await axios.get(URL);
    const data = response.data;
    //console.log(data);

    const regexHtml = /<\/?[^>]+>|\n/g;
    const idDataGames = {
      id: data.id,
      name: data.name,
      description: data.description.replace(regexHtml, ""),
      platforms: (data.platforms.map((p) => p.platform.name)).join(" | "),
      image: data.background_image,
      released: data.released,
      //* se adiciona para el detalle del juego el website
      //website: data.website,
      rating: data.rating,
      genres: (data.genres.map((g) => g.name)).join(' | '),
    };
    //console.log(idDataGames);
    return idDataGames;
  } else {

    const searchById = await Videogame.findByPk(id, {
      include: {
        model: Genre,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    console.log(searchById);

    const gameDb = {
      id: searchById.dataValues.id,
      name: searchById.dataValues.name,
      description: searchById.dataValues.description,
      platforms: searchById.dataValues.platforms,
      image: searchById.dataValues.image,
      released: searchById.dataValues.released,
      rating: searchById.dataValues.rating,
      genres: searchById.dataValues.Genres?.map((gen) => gen.name).join(' | '),
    }
    return gameDb;
  }
};

module.exports = idDataGames;
