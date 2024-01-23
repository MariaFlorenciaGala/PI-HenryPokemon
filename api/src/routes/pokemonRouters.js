const { Router } = require("express");
const routerPokemon = Router();
const { getAllPokemonsHandler, getPokemonByIdHandler, getPokemonByNameHandler, postPokemonsHandler } = require('../handlers/pokemonsHandler')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

routerPokemon.get('', getAllPokemonsHandler)

routerPokemon.get('/:id', getPokemonByIdHandler)

routerPokemon.get('/name', getPokemonByNameHandler)

routerPokemon.post('', postPokemonsHandler)


module.exports = routerPokemon ;
