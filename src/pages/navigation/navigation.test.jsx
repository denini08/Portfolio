import React from 'react';

import ReactDOM from 'react-dom';

import BrowserRouter from 'react-router-dom';

import Navigation from './navigation';

it('renders without crashing', () => {
  const cache = () => {
    return (
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
  };

  const div = document.createElement('div');

  ReactDOM.render(cache, div);

  ReactDOM.unmountComponentAtNode(div);
});
