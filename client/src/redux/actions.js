import axios from 'axios'
import { GET_POKEMON_BY_NAME, GET_POKEMON_BY_ID, GET_TYPES, GET_ALL_POKEMONS, FILTER_BY_TYPE, FILTER,ORDER_ALF, ORDER_ATK ,CLEAN_POKEMON_BY_ID,CLEAN_POKEMON_BY_NAME, CURRENT_PAGE } from "./actionsTypes"

const url = 'http://localhost:3001/pokemons'

export function getusers(){
    return async function(dispatch){
        const response= await axios.get(url);
        dispatch({
            type: GET_ALL_POKEMONS,
            payload:response.data
    })
}
}