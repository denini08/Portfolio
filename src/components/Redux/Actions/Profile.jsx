// 3

const UPDATE_PROFILE = 'UPDATE_PROFILE';

const updateProfile = newProfile => {
  return {
    type: UPDATE_PROFILE,
    payload: {
      profile: {
        social: [
          newProfile
        ]
      }
    }
  }
}

export {
  updateProfile,
  UPDATE_PROFILE
}