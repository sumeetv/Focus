import React, { Component } from 'react';

// Imported Libraries
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Local files
import AboutPage from './AboutPage';
import CoverPage from './CoverPage';
import GamesPage from './GamesPage';
import HomePage from './HomePage';
import {
  GetSiteSections,
  GetTitleForSection,
  GetURLForSection,
  SITE_SECTIONS
} from './SectionHelpers';

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

  renderMainContent() {
    return (
      <Paper className="App-content" zDepth={2}>
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
      </Paper>
    );
  }

  render() {
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
      <Router>
        <MuiThemeProvider>
          <div className="App">
              <div className="App-primary-container">
                <div className="Cover-page-container">
                  <CoverPage />
                </div>
                <div className="App-content-container">
                  {this.renderMainContent()}
                </div>
              </div>
              <div className="App-navigation-menu">
                {headerItems}
              </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}


export default App;
