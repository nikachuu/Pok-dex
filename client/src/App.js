import React, { Component } from 'react';
import Pokedex from "./components/Pokedex/Pokedex";
import PokemonList from "./components/PokemonList/PokemonList";
import { Switch, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render(){
    return (
        <div className="app">
            <Pokedex/>
            <Switch>
                <Route exact path="/" component={Pokedex}/>
                <Route path="/list-of-pokemons" component={PokemonList}/>
            </Switch>
        </div>
    )
}
}

export default App;
