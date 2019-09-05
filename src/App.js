import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import fire from './fire';
import './App.css';
import Form from './Form';
import PokemonIndex from './PokemonIndex';

function App() {
  const loggedIn = false;
  const title = 'Sign Up Your Pokemon';
  const fields = [ 'name', 'weight' ];
  const [ statePokemon, setPokemon ] = useState([]);
  const [ firebasePokemon, setFirebasePokemon ] = useState([]);

  useEffect(() => {
    const pokemonRef = fire.database().ref('pokemon').limitToLast(100);
    pokemonRef.on('value', pokemon => {
      const pokemonArray = [];
      pokemon.forEach(poke => {
        pokemonArray.push(poke.val())
      });
      setFirebasePokemon(pokemonArray);
    })

    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(pokemon => pokemon.json())
      .then(pokemonJSON => {
        const pokemonData = []
        pokemonJSON.results.forEach((pokemon, index) => {
          fetch(pokemon.url)
            .then(fullPokemon => fullPokemon.json())
            .then(fullPokemonJSON => {
              pokemonData.push({
                image: fullPokemonJSON.sprites.front_default,
                name: fullPokemonJSON.name,
                weight: fullPokemonJSON.weight,
              })
              console.log(pokemonData);
              if (pokemonData.length === 20) setPokemon(pokemonData)
            })
        })
      })
    }, [])

  return (
    <Router>
      <div className="App">
        <Link to="/">All Pokemon</Link>
        <Link to="/new">Create Pokemon</Link>
        <Route
          path="/new"

          render={() =>
            <Form
              title={ title }
              fields={ fields }
            />
          }
        />
        <Route
        	path="/"
        	exact
        	render={() =>
        		<PokemonIndex
              statePokemon={ statePokemon }
              firebasePokemon={ firebasePokemon }
            />
        	}
        />
        { loggedIn ? <button>Log Out</button> : <button>Log In</button> }
      </div>
    </Router>
  );
}

export default App;
