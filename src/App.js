import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AboutPage from './AboutPage';
import HomePage from './HomePage';
import GamesPage from './GamesPage';
import logo from './logo.svg';

import './App.css';

const SITE_SECTIONS = {
  HOME: 'HOME',
  ABOUT: 'ABOUT',
  BLOG: 'BLOG',
  PROJECTS: 'PROJECTS',
  SCOTCH: 'SCOTCH',
  GAMES: 'GAMES'
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    if (!this.state.menuOpen) {
      this.setState({
        menuOpen: true
      });
    }
  };

  closeMenu() {
    if (this.state.menuOpen) {
      this.setState({
        menuOpen: false
      });
    }
  }

  getLinkForSection(section) {
    switch (section) {
      case SITE_SECTIONS.ABOUT:
        return '/about';
      case SITE_SECTIONS.BLOG:
        return '/blog';
      case SITE_SECTIONS.GAMES:
        return '/games';
      case SITE_SECTIONS.HOME:
        return '/home';
      case SITE_SECTIONS.PROJECTS:
        return '/projects';
      case SITE_SECTIONS.SCOTCH:
        return '/scotch';
      default:
        return '/';
    }
  }

  getTextForSection(section) {
    switch (section) {
      case SITE_SECTIONS.ABOUT:
        return 'About';
      case SITE_SECTIONS.BLOG:
        return 'Blog';
      case SITE_SECTIONS.PROJECTS:
        return 'Projects';
      case SITE_SECTIONS.SCOTCH:
        return 'Scotch';
      case SITE_SECTIONS.GAMES:
        return 'Games';
      case SITE_SECTIONS.HOME:
        return 'Home';
      default:
        return '';
    }
  }

  renderMenu() {
    var menuItems = [];
    for (let section in SITE_SECTIONS) {
      menuItems.push(
        <MenuItem
          onClick={this.closeMenu}
          containerElement={<Link to={(this.getTextForSection(section))} />}
          primaryText={this.getTextForSection(section)} />
      );
    }
    return (
      <Drawer open={this.state.menuOpen}>
        {menuItems}
      </Drawer>
    );
  };

  renderHeader() {
    return (
      <div className="App-header">
        <span>
          <div className="Menu-icon-container" onClick={this.openMenu}>
            <i className="material-icons">menu</i>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
        </span>
        <div className="App-title-container">
          <h2 className="App-title">
            {"Sumeet is an engineering manager in San Francisco \
              with too many interests and not enough time"}
          </h2>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            {this.renderMenu()}
            <div className="App-container" onClick={this.closeMenu}>
              {this.renderHeader()}
              <div className="App-content-container">
                <div className="App-content">
                  <Route exact path="/" component={AboutPage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/games" component={GamesPage} />
                  <Route path="/home" component={HomePage} />
                </div>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}


export default App;
