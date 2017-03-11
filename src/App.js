import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{"Welcome to sumeetv's clownshow!"}</h2>
        </div>
        <div className="App-container">
          <div className="App-index">
            <li>Blog</li>
            <li>About</li>
            <li>Personal Projects</li>
            <li>Scotch</li>
          </div>
          <div className="App-content">
            <h1>
              {"This isn't my first rodeo"}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
