import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>{"Welcome to sumeetv's clownshow!"}</h2>
          </div>
          <div className="App-container">
            <div className="App-index">
              <p>About</p>
              <p>Blog</p>
              <p>Personal Projects</p>
              <p>Scotch</p>
              <p>Games</p>
            </div>
            <div className="App-content">
              {this.props.children}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;
