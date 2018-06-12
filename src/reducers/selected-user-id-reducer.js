import {USER_ACTION_TYPES} from "../actions";

export const selectedUserIdReducer = (state = null , {type , payload}) => {
  switch (type) {
    case USER_ACTION_TYPES.SELECT_USER: {
      const {userId} = payload;
      return userId;
    }
    default:
      return state;
  }
}
