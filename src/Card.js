import React from 'react';

function Card({ name, weight, image }) {
  return (
    <div>
      <ul>
        <li>Name: { name }</li>
        <li>Weight: { weight }</li>
      </ul>
      <img src={ image } alt='pokemon'/>
    </div>
  )
}

export default Card;
