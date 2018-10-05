// 2

import { UPDATE_PROFILE } from '../Actions/Profile';

const profileReducer = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_PROFILE:
      return Object.assign(state, state)

    default:
      return state;
  }
}

export default profileReducer;