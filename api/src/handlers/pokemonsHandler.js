const { getPokemon, getPokemonByID, getPokemonByName, createPokemon } = require('../controllers/pokemonsController');


const getAllPokemonsHandler = async( req , res) => {
    try {
        const response = await getPokemon()
        res.status(200).json(response)
    } catch(error) {
        res.status(400).json({ error: error.message})
    }
}

const getPokemonByIdHandler = async( req , res) => {
    try {
        const { id } = req.params;
        const response = await getPokemonByID(id)
        res.status(200).json(response)
    } catch(error) {
        res.status(400).json({ error: error.message})
    }
}

const getPokemonByNameHandler = async( req , res) => {
    try {

        res.status(200).json(response)
    } catch(error) {
        res.status(400).json({ error: error.message})
    }
}

const postPokemonsHandler = async( req , res) => {
    try {
        const { name, image, type, hp, defense, speed, height, weight, createdInDB } = req.body;
        const response = await createPokemon(name, image, type, hp, defense, speed, height, weight, createdInDB);
        res.status(201).json(response)

        console.log(`Se creó el pokemón "${name}" con éxito. `)

    } catch(error) {
        res.status(400).json({ error: error.message})
    }
}

module.exports = {
    getAllPokemonsHandler,
    getPokemonByIdHandler,
    getPokemonByNameHandler,
    postPokemonsHandler
}