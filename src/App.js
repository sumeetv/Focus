import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AboutPage from './AboutPage';
import GamesPage from './GamesPage';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>{"Welcome to sumeetv's clownshow!"}</h2>
            </div>
            <div className="App-container">
              <div className="App-index">
                <Link to="/about">About</Link>
                <p>Blog</p>
                <p>Personal Projects</p>
                <p>Scotch</p>
                <Link to="/games">Games</Link>
              </div>
              <div className="App-content">
                <Route exact path="/" component={AboutPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/games" component={GamesPage} />
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}


export default App;
