const { Type } = require('../db');


const getTypePokemon = async() => {
    const typePokemonsDB = await Type.findAll();
    return typePokemonsDB;
};

module.exports = {
    getTypePokemon
}