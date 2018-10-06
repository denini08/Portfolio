import React from 'react';

import ReactDOM from 'react-dom';

import App from './app';

import store from './components/redux/store';

import { Provider } from 'react-redux';

// store.dispatch({type: 'PROFILE_UPDATE', profile: {social: [{title: 'test', url:'', key:3}]}})

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
