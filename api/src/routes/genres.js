const { Router } = require('express');
const getGenres = require('../handlers/getGenresHandlers');


const genresRoutes = Router();

//Rutas
genresRoutes.get('/', getGenres)


module.exports = genresRoutes;