const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");

const postDataVideoGames = async (
  name,
  description,
  platforms,
  image,
  released,
  website,
  rating,
  genre,
) => {
  
  const newGame = await Videogame.create({
    name,
    description,
    platforms,
    image,
    released,
    website,
    rating,
  });

  const addGenres = await Genre.findAll({
    where: {
      name: genre,
      
    }
  })
// hago la relación
  await newGame.addGenre(addGenres);
// encuentro en la tabla el genero correspondiente al game

  const gameRelation = await Videogame.findOne({
    where: {
      id: newGame.id,
      //name: ['genre']
    },
    include: [{
      model: Genre,
      attributes: ['name'],
      through: {
        attributes: []
      }
    }]
  })
  //console.log('*******',gameRelation, '******');
  return gameRelation;
};

module.exports = postDataVideoGames;


/* {
        [Op.in]: [genres ? genres : []] , // si no hay géneros, me devuelve un [] vacio
      }, */