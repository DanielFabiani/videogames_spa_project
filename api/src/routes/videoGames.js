const { Router } = require('express');
const getAllVideoGames = require('../handlers/getGamesHandlers');

const gamesRoutes = Router();

//Rutas
gamesRoutes.get('/', getAllVideoGames)
//videoRoutes.get('/byId/:id', getVideoGamesById)

module.exports = gamesRoutes;

