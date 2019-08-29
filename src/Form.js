import React from 'react';

function Form() {
  const title = 'I am a Form'
  return (
    <div>
      <h1>{ title }</h1>
      <form>
        <label htmlFor='name'>
          Name
        </label>
        <input
          id='name'
          name='name'
        />
        <label htmlFor='weight'>
          Weight
        </label>
        <input
          id='weight'
          name='weight'
        />
      </form>
    </div>
  )
}

export default Form;
