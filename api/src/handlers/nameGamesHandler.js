const { nameDataGames }= require("../controllers/nameGamesController");

const getNameVideoGames = async (req, res) => {
  const { name } = req.query;
  const nameLower = name.toLowerCase();
  //console.log(nameLower);
  try {
    const videoGames = await nameDataGames(nameLower);
    res.status(200).json(videoGames);
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = getNameVideoGames;