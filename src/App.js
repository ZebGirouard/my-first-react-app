import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Card from './Card';

function App() {
  const title = 'Sign Up Your Pokemon';
  const fields = [ 'name', 'weight' ];
  const [ statePokemon, setPokemon ] = useState([]);

  useEffect(() => {
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
              if (pokemonData.length === 20) setPokemon(pokemonData)
            })
        })
      })
    }, [])

  return (
    <div className="App">
      <p>
        Pleased to meet you!
      </p>
      <Form
        title={ title }
        fields={ fields }
      />
      <p>{JSON.stringify(statePokemon)}</p>
      { statePokemon.map(poke => (
          <Card
            image={ poke.image }
            name={ poke.name }
            weight={ poke.weight }
          />
        )
      )}
    </div>
  );
}

export default App;
