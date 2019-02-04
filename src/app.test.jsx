import React from 'react';

import ReactDOM from 'react-dom';

import App from './app';

import { store } from './components/redux/store';

import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  
  ReactDOM.unmountComponentAtNode(div);
});
