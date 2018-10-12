import { PROFILE_ADD_SOCIAL, PROFILE_API_GET } from './actions';

const profileAddSocial = social => { // Object
  return {
    type: PROFILE_ADD_SOCIAL,
    social
  }
}

const profileApiGet = request => { // Object
  return {
    type: PROFILE_API_GET,
    request
  }
}

export {
  profileAddSocial,
  profileApiGet
}
