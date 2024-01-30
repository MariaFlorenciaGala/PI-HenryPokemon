import { GET_POKEMON_BY_NAME, GET_POKEMON_BY_ID, GET_TYPES, GET_ALL_POKEMONS, FILTER_BY_TYPE, FILTER,ORDER_ALF, ORDER_ATK ,CLEAN_POKEMON_BY_ID,CLEAN_POKEMON_BY_NAME, CURRENT_PAGE } from "./actionsTypes"

let initialState = {
    allPokemons:[],
    allTypes:[]
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allUsers: action.payload
            }
        default:
            return state
    }
}

export default rootReducer