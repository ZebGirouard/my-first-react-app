import React from 'react';
import Card from './Card';

function PokemonIndex({statePokemon, firebasePokemon}) {
  return (
    <div>
      { statePokemon.length > 0 && statePokemon.concat(firebasePokemon).map(poke => (
          <Card
            image={ poke.image }
            name={ poke.name }
            weight={ poke.weight }
          />
        )
      )}
    </div>
  )
}

export default PokemonIndex;
