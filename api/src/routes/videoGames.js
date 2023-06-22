const { Router } = require('express');
const getAllVideoGames = require('../handlers/allGamesHandlers');
const getIdVideoGames = require('../handlers/idGamesHandler');

const gamesRoutes = Router();

//Rutas
gamesRoutes.get('/', getAllVideoGames)
gamesRoutes.get('/:id', getIdVideoGames)

module.exports = gamesRoutes;

