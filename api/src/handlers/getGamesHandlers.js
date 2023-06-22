const { allDataGames }= require("../controllers/gamesController");

const getAllVideoGames = async (req, res) => {
  try {
    const videoGames = await allDataGames()
    res.status(200).json(videoGames)
  } catch (error) {
    //console.log(error);
    res.status(404).json({error: error.message})
  }
}

// const getIdVideGames

module.exports =  getAllVideoGames; 
