const { allDataGames }= require("../controllers/allGamesController");

const getAllVideoGames = async (req, res) => {
  try {
    const videoGames = await allDataGames()
    res.status(200).json(videoGames)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports =  getAllVideoGames; 
