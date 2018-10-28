import React from 'react';

import ReactDOM from 'react-dom';

import App from './app';

import { store, persistor } from './components/redux/store';

import { HashRouter } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';

import {
  Provider
} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <App/>
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
