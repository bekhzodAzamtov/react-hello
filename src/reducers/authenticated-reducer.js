import {USER_ACTION_TYPES as actions} from '../actions';

export const defaultAuthState = {
  token: null ,
  username: null ,
}

export const authenticated = (state = defaultAuthState, action) => {
  const {type , payload} = action;
  switch (type) {
    case actions.SET_AUTHENTICATED: {
      const {authenticated} = payload;
      return authenticated;
    }
    case actions.GET_TOKEN: {
      console.log(payload);
      return state;
    }


    default:
      return state;
  }
}
