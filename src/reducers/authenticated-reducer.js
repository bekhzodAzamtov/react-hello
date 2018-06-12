import {USER_ACTION_TYPES as actions} from '../actions';

export const authenticated = (state = false , action) => {
  const {type , payload} = action;
  switch (type) {
    case actions.SET_AUTHENTICATED: {
      const {authenticated} = payload;
      return authenticated;
    }
    default:
      return state;
  }
}
