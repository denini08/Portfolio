import { PROFILE_ADD_SOCIAL, PROFILE_API_GET } from './actions';

// import promisse from 'redux-promisse-middleware'; 

// https://www.youtube.com/watch?v=Td-2D-_7Y2E&index=6&list=PLoYCgNOIyGADILc3iUJzygCqC8Tt3bRXt

import axios from 'axios';

const profileReducer = (state = {}, action = {}) => {
  switch(action.type) {
    case PROFILE_ADD_SOCIAL:
      return Object.assign({}, state, {social: state.social.concat(action.social)});

    case PROFILE_API_GET:
      axios({
        url: action.request.uri.concat(action.request.user),
        method: 'get'
      }).then(response => {
        // dispatch
      }).catch(error => {
        // dispatch
      })

      return state// Object.assign({}, state, {api: state.api.concat(response.data)});

    default:
      return state;
  }
}

export default profileReducer;