const { Videogames, Genres } = require('../db')

const postDataVideoGames = async (
  name,
  description,
  platforms,
  image,
  released,
  website,
  rating,
  genres
) => {
  const [ newVideogame, created ]= await Videogames.findOrCreate({
    where: { name },
    defaults: 
    {
      name,
      description,
      platforms,
      image,
      released,
      website,
      rating,
    },
    include:
    {
      model: Genres,
      attributes: ['name'],
      through: { attributes: [] }
    }
    })

    await newVideogame.setGenres(genres)
    .then((game) => console.log('Juego creado: ', game))
    .catch((error)=> console.error('Error al crear el juego', error));
    console.log(newVideogame);
    if(!created) {
      console.log(newVideogame);
    };

    return newVideogame;
};

module.exports = postDataVideoGames;
