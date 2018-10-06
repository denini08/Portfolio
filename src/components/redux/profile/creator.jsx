import { UPDATE_PROFILE } from './actions';

const profileUpdate = newProfile => { // Array o objects (title, url, key)
  return {
    type: UPDATE_PROFILE,
    profile: {
      social: newProfile
    }
  }
}

export {
  profileUpdate
}
