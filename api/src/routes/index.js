const { Router } = require('express');
const gamesRoutes = require('./videoGames');
const genresRoutes = require('./genres');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', gamesRoutes)
router.use('/genres', genresRoutes)


module.exports = router;
