import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import App from './components/App/App';

import store from './components/Redux/Store';

import { Provider } from 'react-redux';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );
}

store.subscribe(render)

render()