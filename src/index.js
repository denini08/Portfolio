import React from 'react';

import ReactDOM from 'react-dom';

import App from './app';

import store from './components/redux/store';

import { Provider } from 'react-redux';

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
