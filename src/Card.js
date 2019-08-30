import React from 'react';

function Card({ name, weight, image }) {
  return (
    <div>
      <ul>
        <li>Name: { name }</li>
        <li>Weight: { weight }</li>
      </ul>
      <img src={ image || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' } alt='pokemon'/>
    </div>
  )
}

export default Card;
