const { Router } = require("express");
const routerPokemon = require("../routes/pokemonRouters");
const routerType = require("../routes/typeRouters");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routes = Router();

routes.use('/pokemons', routerPokemon);
routes.use('/types', routerType);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = routes;
