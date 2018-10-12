import thunk from 'redux-thunk';

const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log(`Error on calling ${action.type} : ${e}`);
  }
}

export {
  error,
  thunk
}