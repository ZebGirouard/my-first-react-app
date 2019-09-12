import React from 'react';

function Form({ title, fields }) {
  const backupTitle = 'I am a Form';
  title = title || backupTitle;
  return (
    <div>
      <h1>{ title }</h1>
      <form>
        <label htmlFor='name'>
          { fields[0] }
        </label>
        <input
          id={ fields[0] }
          name={ fields[0] }
        />
        <label htmlFor='weight'>
          { fields[1] }
        </label>
        <input
          id={ fields[1] }
          name={ fields[1] }
        />
      </form>
    </div>
  );
}

export default Form;
