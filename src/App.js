import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


    window.location.href = "mailto:mail@example.org";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;