import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  renderMainContent() {
    return (
      <div className="App-content">
        <h1>
          {"This isn't my first rodeo"}
        </h1>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{"Welcome to sumeetv's clownshow!"}</h2>
        </div>
        <div className="App-container">
          <div className="App-index">
            <p>Blog</p>
            <p>Career</p>
            <p>Personal Projects</p>
            <p>Scotch</p>
            <p>Games</p>
          </div>
          {this.renderMainContent()}
        </div>
      </div>
    );
  }
}

export default App;
