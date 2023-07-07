const idDataGames = require("../controllers/idGamesController");


const getIdVideoGames = async (req, res) => {
  const { id }= req.params;
  //console.log(id);
  try {
      const videoGames = await idDataGames(id)
      res.status(200).json(videoGames)
    }
  catch (error) {
    res.status(404).json({error: error.message})
  }
};


module.exports = getIdVideoGames;