const { Router } = require('express');
const gamesRoutes = require('./videoGames');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', gamesRoutes)


module.exports = router;
