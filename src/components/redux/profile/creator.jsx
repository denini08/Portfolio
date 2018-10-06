import { UPDATE_PROFILE } from './actions';

const profileUpdate = profile => {
  return {
    type: UPDATE_PROFILE,
    payload: {
      profile
    }
  }
}

export {
  profileUpdate
}
