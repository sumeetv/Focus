import React, { Component } from 'react';

// Imported LIbraries
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Local files
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import GamesPage from './GamesPage';
import {
  GetSiteSections,
  GetTitleForSection,
  GetURLForSection,
  SITE_SECTIONS
} from './SectionHelpers';

// Assets
import logo from './logo.svg';

// CSS
import './App.css';

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

  renderMenu() {
    var menuItems = [];
    let sections = GetSiteSections();
    for (let i = 0; i < sections.length; i++) {
      menuItems.push(
        <MenuItem
          onClick={this.closeMenu}
          containerElement={<Link to={(GetURLForSection(sections[i]))} />}
          primaryText={GetTitleForSection(sections[i])} />
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
                  <Route
                    exact path={GetURLForSection(SITE_SECTIONS.HOME)}
                    component={HomePage} />
                  <Route
                    path={GetURLForSection(SITE_SECTIONS.ABOUT)}
                    component={AboutPage} />
                  <Route
                    path={GetURLForSection(SITE_SECTIONS.GAMES)}
                    component={GamesPage} />
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
