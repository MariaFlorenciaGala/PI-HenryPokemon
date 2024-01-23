const { Router } = require("express");
const routerType = Router();
const { getAllPokemonsHandler } = require('../handlers/typeHandler')


routerType.get('', getAllPokemonsHandler)

module.exports = routerType
