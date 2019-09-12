import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  const title = 'Sign Up Your Pokemon';
  const fields = [ 'name', 'weight' ];
  return (
    <div className="App">
      <p>
        Pleased to meet you!
      </p>
      <Form
        title={ title }
        fields={ fields }
      />
    </div>
  );
}

export default App;
