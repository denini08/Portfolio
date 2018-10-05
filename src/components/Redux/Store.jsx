// 1

import { createStore, combineReducers } from 'redux';

import profileReducer from './Reducers/Profile';

const reducers = combineReducers({
  profile: profileReducer
})

const store = createStore(
  reducers,
  {
    profile: {
      social: [
        {title: 'linkedin', url: '', key: 1},
        {title: 'github', url: '', key: 2},
        {title: 'medium', url: '', key: 3}
      ]
    }
  },
  window.devToolsExtension && window.devToolsExtension()
);

export default store;