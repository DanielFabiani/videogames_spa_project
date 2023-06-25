const { Router } = require('express');
const getAllVideoGames = require('../handlers/allGamesHandlers');
const getIdVideoGames = require('../handlers/idGamesHandler');
const getNameVideoGames = require('../handlers/nameGamesHandler');
const postVideoGames = require('../handlers/postGamesHandler');

const gamesRoutes = Router();

//Rutas
gamesRoutes.get('/', getAllVideoGames)
gamesRoutes.get('/name', getNameVideoGames)
gamesRoutes.get('/:id', getIdVideoGames)
gamesRoutes.post('/', postVideoGames)


module.exports = gamesRoutes;