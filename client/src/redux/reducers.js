import { combineReducers } from "redux";

let pokemonShowing = null;

/*tambem nao faco ideia do que colocar aqui, ja que nao tem mais nada funcionando...*/
function showPokemon(state = pokemonShowing, action){
  switch(action.type){
    case "SHOW_SPECIFIC":
      return console.log("teste!!!!!!!!!");
    case "SHOW_LIST":
      /* retornar bd inteiro */
    default:
      return state;

  };
};

const reducers = combineReducers(showPokemon);

export default reducers;