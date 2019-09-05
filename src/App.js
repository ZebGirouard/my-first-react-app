import React, { useEffect, useState } from 'react';
import fire from './fire';
import './App.css';
import Form from './Form';
import Card from './Card';

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
    <div className="App">
      <p>
        Pleased to meet you!
      </p>
      <Form
        title={ title }
        fields={ fields }
      />
      { statePokemon.length > 0 && statePokemon.concat(firebasePokemon).map(poke => (
          <Card
            image={ poke.image }
            name={ poke.name }
            weight={ poke.weight }
          />
        )
      )}
      { loggedIn ? <button>Log Out</button> : <button>Log In</button> }
    </div>
  );
}

export default App;
