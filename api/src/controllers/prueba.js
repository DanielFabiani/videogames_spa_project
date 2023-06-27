/* const { Recipe, Diet } = require("../db.js");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  try {
    const { name, image, summary, healthScore, steps, diets } = req.body;

    if (!name || !summary)
      return res.status(404).send("Creacion Cancelada. Falto Informacion");

    const newRecipe = await Recipe.create({
      name: name.toLowerCase(),
      [/^.+.*\.(jpg|JPG|bmp|BMP|gif|GIF|tif|TIF|png|PNG)$/.test(image)
        ? "image"
        : null]: image,
      summary,
      healthScore,
      steps,
    });

    const dietsToAdd = await Diet.findAll({
      where: {
        name: {
          [Op.in]: diets ? diets : [], //si no hay diets, devuelve vacio
          //in? sequelize
        },
      },
    });

    await newRecipe.addDiets(dietsToAdd); //relaciono genres con el juego creado
    return res.json(newRecipe);
  } catch (error) {
    return res.status(404).json(error.message);
  }
}; 
 */
// ----------- mi código -----------

/*   name,
  description,
  platforms,
  image,
  released,
  website,
  rating,
  genres,
  GenresId,
) => {

  const newVideogame= await Videogames.findOrCreate({
    where: { name },
    defaults: {
      //name,
      description,
      platforms,
      image,
      released,
      website,
      rating,
    }
  })
  await newVideogame.addGenres(GenresId);
  return newVideogame;
 */

/* 
  // -------- post 2
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
 */
  