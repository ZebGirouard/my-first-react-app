import React, { useState } from 'react';
import fire from './fire.js';

function Form({ title, fields }) {
  const initialFields = {};
  fields.forEach(field => initialFields[ field ] = '');
  const [ stateFields, setFields ] = useState(initialFields);

  title = title || 'I am a Form';
  return (
    <div>
      <h1>{ title }</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          console.log(stateFields);
          fire.database().ref('pokemon').push(stateFields);
        }}
      >
        { fields.map(field => (
          <span>
            <label htmlFor={ field }>
              { field }
            </label>
            <input
              id={ field }
              name={ field }
              onChange={ event => {
                console.log(event.target.value);
                const { name, value } = event.target;
                setFields({ ...stateFields, [ name ]: value });
              }}
              value={ stateFields[ field ] }
            />
          </span>
        ))}
        <input type='submit'/>
      </form>
    </div>
  )
}

export default Form;
