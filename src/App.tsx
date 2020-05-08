import React from 'react';
import './App.css';
import EmailValidator from './EmailValidator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Email Validation</h1>
        <h2>Creating a React App with <span style={{
          fontFamily:'cursive',
          color: "rgb(169, 254, 129)"
          }}>Typescript</span></h2>
      </header>
      <main>
        <EmailValidator />
      </main>
    </div>
  );
}

export default App;
