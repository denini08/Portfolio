import { PROFILE_UPDATE } from './actions';

const profileUpdate = newProfile => { // Array o objects (title, url, key)
  return {
    type: PROFILE_UPDATE,
    profile: {
      social: newProfile
    }
  }
}

export {
  profileUpdate
}
