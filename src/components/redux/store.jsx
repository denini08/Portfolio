import { createStore, combineReducers } from 'redux';

import profileReducer from './profile/reducer';

const reducers = combineReducers({
  profile: profileReducer
})

const store = createStore(
  reducers,
  {
    profile: {
      social: [
        {title: 'linkedin', url: '', key: 0},
        {title: 'github', url: '', key: 1},
        {title: 'medium', url: '', key: 2}
      ]
    }
  },
  window.devToolsExtension && window.devToolsExtension()
);

export default store;