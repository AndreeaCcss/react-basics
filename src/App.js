import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import User from './components/User-one'
import UsersBoard from './components/UsersBoard'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello World</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <Title content="Some Simple Title" />
        <LightSwitch />
        <div> 
          <UsersBoard />
          <User name="Rhea"/>
          <User name="Y"/>
          <User name="X"/>
          <User name="S"/> 
        </div>

      </main>
    </div>
  );
}

export default App;
