import React, { useState } from 'react';

function Form({ title, fields }) {
  const initialFields = {}
  fields.forEach(field => initialFields[ field ] = '')
  const [ stateFields, setFields ] = useState(initialFields)

function Form({ title, fields }) {
  const backupTitle = 'I am a Form';
  title = title || backupTitle;
  return (
    <div>
      <h1>{ title }</h1>
      <form>
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
      </form>
      <p>{ stateFields.name }</p>
    </div>
  );
}

export default Form;
