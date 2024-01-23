const { Pokemon } = require('../db');
const axios = require('axios');


const getPokemon = async() => {
    const pokemonsDB = await Pokemon.findAll();
    return pokemonsDB;
};

const getPokemonByID = async(id) => {
    const pokemonFound = await Pokemon.findByPk(id);
    console.log(`El id es: ${id} y el pokemon es: ${pokemonFound.name}`)
    return pokemonFound
};

const getPokemonByName = async() => {

};
const createPokemon = async ( name, image, type, hp,  attack, defense ,speed, height, weight) => {
    const newPokemon = await Pokemon.create({ name, image, type, hp, attack, defense, speed, height, weight});
    return newPokemon;
}

module.exports = {
    getPokemon,
    getPokemonByID,
    getPokemonByName,
    createPokemon
}