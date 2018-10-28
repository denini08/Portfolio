import { createStore, combineReducers, applyMiddleware } from 'redux';

import profileReducer from './profile/reducer';

import { error, thunk } from './middleware';

import { persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import createEncryptor from 'redux-persist-transform-encrypt';

const reducers = combineReducers({
  profile: profileReducer
});

const middlewares = applyMiddleware(error, thunk);

const encryptor = createEncryptor({
  secretKey: JSON.stringify(process.env.REACT_APP_SECRET_KEY),
  onError: error => {
    console.log(error);
  }
});

const persistedReducer = persistReducer(
  {
    key: JSON.stringify(process.env.REACT_APP_SECRET_KEY),
    storage,
    transforms: [encryptor]
  },
  reducers
);

const initialState = {
  profile: {
    social: [
      { title: 'linkedin', url: '', key: 0 },
      { title: 'github', url: '', key: 1 },
      { title: 'medium', url: '', key: 2 }
    ]
  }
};

const store = createStore(
  persistedReducer,
  initialState,
  middlewares,
  window.devToolsExtension && window.devToolsExtension()
);

const persistor = persistStore(store);

export { store, persistor };
