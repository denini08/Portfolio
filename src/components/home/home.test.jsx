import React from 'react';

import ReactDOM from 'react-dom';

import Home from './home';

import { HashRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Home />
    </Router>, div);
  
  ReactDOM.unmountComponentAtNode(div);
});
