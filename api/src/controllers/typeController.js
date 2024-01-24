const { Type } = require('../db');
const axios = require('axios');

const getTypePokemon = async() => {
    const allTypes = [];

    const infoApi = await axios.get('https://pokeapi.co/api/v2/type')
    const resultApi = await infoApi.data.results;
    //console.log(resultApi)
    resultApi.map((type) => allTypes.push(type.name))
    //console.log(allTypes)
    await Promise.all(allTypes.map((type) => {Type.findOrCreate({ where: {name: type}} )}
    ));
    const infoDB = await Type.findAll();
    return infoDB;
};

module.exports = {
    getTypePokemon
}