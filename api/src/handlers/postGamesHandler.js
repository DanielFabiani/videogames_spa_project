const postDataVideoGames = require("../controllers/postGamesController");



const postVideoGames = async (req, res)=> {

  const { name, description, platforms, image, released, website, rating, genres } = req.body;
  if(!name || !description || !platforms) {
    return res.status(404).send('Falta enviar datos obligatorios')
  }
  try {
    const postGame = await postDataVideoGames(name, description, platforms, image, released, website, rating, genres);
    res.status(200).json(postGame);

  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = postVideoGames