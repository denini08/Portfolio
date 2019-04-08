import React from 'react';

import ReactDOM from 'react-dom';

import BrowserRouter from 'react-router-dom';

import Navigation from './navigation';

it('renders without crashing', () => {
  const generateNavigationComponent = () => {
    return (
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
  };

  const div = document.createElement('div');

  ReactDOM.render(generateNavigationComponent, div);

  ReactDOM.unmountComponentAtNode(div);
});
