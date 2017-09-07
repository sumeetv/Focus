import React, { Component } from 'react';

// Imported LIbraries
import injectTapEventPlugin from 'react-tap-event-plugin';
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
import cover from '../assets/cover.jpg';

// CSS
import '../css/App.css';
import '../css/Palette.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    injectTapEventPlugin();
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

  renderHeader() {
    var headerItems = [];
    let sections = GetSiteSections();
    for (let i = 0; i < sections.length; i++) {
      headerItems.push(
        <Link className="App-header-link" to={(GetURLForSection(sections[i]))}>
          {GetTitleForSection(sections[i])}
        </Link>
      );
    }

    return (
      <div className="App-header">
        <div className="App-cover">
          <div className="App-title-container">
            <h2 className="App-title">
              {"Sumeet is an engineering manager in San Francisco \
                with too many interests and not enough time"}
            </h2>
          </div>
          <div className="App-cover-image">
            <img src={cover} alt="cover" />
          </div>
        </div>
        <div className="App-header-menu">
          {headerItems}
        </div>
      </div>
    );
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <div className="App-container" onClick={this.closeMenu}>
              {this.renderHeader()}
              <div className="App-content-container">
                <div className="App-content">
                  <Route
                    exact path={"/"}
                    component={HomePage} />
                  <Route
                    path={GetURLForSection(SITE_SECTIONS.HOME)}
                    component={HomePage} />
                  <Route
                    path={GetURLForSection(SITE_SECTIONS.ABOUT)}
                    component={AboutPage} />
                  <Route
                    path={GetURLForSection(SITE_SECTIONS.GAMES)}
                    component={GamesPage} />
                  <Route
                    path={GetURLForSection(SITE_SECTIONS.SCOTCH)}
                    component={() => (
                      window.location = "https://www.instagram.com/thescotchguy"
                    )}
                  />
                  <Route
                    path={GetURLForSection(SITE_SECTIONS.PROJECTS)}
                    component={() => (
                      window.location = "https://www.github.com/sumeetv"
                    )}
                  />
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
