import React from 'react';

import ReactDOM from 'react-dom';

import Match from './match';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Match />, div);

  ReactDOM.unmountComponentAtNode(div);
});
