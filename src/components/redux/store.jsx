import { createStore, combineReducers, applyMiddleware } from 'redux';

import profileReducer from './profile/reducer';

import { error, thunk } from './middleware'

const reducers = combineReducers({
  profile: profileReducer
})

const middlewares = applyMiddleware(
  error,
  thunk
);

const store = createStore(
  reducers,
  {
    profile: {
      social: [
        {title: 'linkedin', url: '', key: 0},
        {title: 'github', url: '', key: 1},
        {title: 'medium', url: '', key: 2}
      ],
      api: []
    }
  },
  middlewares,
  window.devToolsExtension && window.devToolsExtension()
);

export default store;