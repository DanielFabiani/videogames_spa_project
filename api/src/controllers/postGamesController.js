const { Videogames, Genres } = require('../db')

const postDataVideoGames = async (
  name,
  description,
  platforms,
  image,
  released,
  website,
  rating,
  genres,
) => {
  const [ newVideogame, created ]= await Videogames.findOrCreate({
    where: { name },
    defaults: 
    {
      //name,
      description,
      platforms,
      image,
      released,
      website,
      rating,
      genres,
    },
    include: {
      model: Genres,
      //attributes: [name],
      attributes: {name: `${genres}`},
      through: { attributes: [] },
    },
    })

    console.log(newVideogame);
    if(!created) {
      //console.log(newVideogame);
    };

    return newVideogame;
};

module.exports = postDataVideoGames;
