import React, { Component } from 'react';

import {
  List,
  ListItem
} from 'material-ui/List';
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
  renderHeader() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-title-container">
          <h2 className="App-title">
            {"Sumeet is an engineering manager in San Francisco \
              with too many interests and not enough time"}
          </h2>
        </div>
      </div>
    );
  }

  renderNav() {
    return(
      <List className="App-index">
        <ListItem 
          primaryText="About"
          containerElement={<Link to="/about" />} />
        <ListItem primaryText="Blog" />
        <ListItem primaryText="Personal Projects" />
        <ListItem primaryText="Scotch" />
        <ListItem
          primaryText="Games"
          containerElement={<Link to="/games" />} />
      </List>
    );
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            {this.renderHeader()}
            <div className="App-container">
              {this.renderNav()}
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
