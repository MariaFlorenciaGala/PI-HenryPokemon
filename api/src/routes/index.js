const { Router } = require("express");
const pokemonRouter = require("../routes/pokemonRouters");
const typeRouters = require("../routes/typeRouters");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routes = Router();

routes.use('/pokemons', pokemonRouter);
routes.use('/types', typeRouters);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = routes;
