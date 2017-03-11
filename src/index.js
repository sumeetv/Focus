import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import AboutPage from './AboutPage';
import App from './App';
import DefaultPage from './DefaultPage';

import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={AboutPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/testing" component={DefaultPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);

