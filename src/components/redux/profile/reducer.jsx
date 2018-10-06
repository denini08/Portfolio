import { PROFILE_UPDATE } from './actions';

const profileReducer = (state = {}, action = {}) => {
  switch(action.type) {
    case PROFILE_UPDATE:
      return action.profile;

    default:
      return state;
  }
}

export default profileReducer;