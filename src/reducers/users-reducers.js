import {USER_ACTION_TYPES} from '../actions';

const defaultUsers = [
  {id: 1 , name: 'Azamatov' , age: "26"} ,
  {id: 2 , name: 'Xasanov' , age: "27"} ,
  {id: 3 , name: 'Jo`rayev' , age: "25"} ,
]

export const usersReducers = (state = defaultUsers , action) => {
  const {type , payload} = action;
  console.log(type);
  switch (type) {
    case USER_ACTION_TYPES.FETCH_USER_LIST: {
      return [];
    }
    case USER_ACTION_TYPES.FETCH_USER_LIST_SUCCESS: {
      return payload;
    }
    case USER_ACTION_TYPES.FETCH_USER_LIST_FAILED: {
      return [];
    }
    case USER_ACTION_TYPES.ADD_USER: {
      const {user} = payload;
      return [...state , {...user, pending: true}];
    }
    case USER_ACTION_TYPES.ADD_USER_FAILED: {
      const {userId} = payload;
      return state.filter(user => user.id === userId);
    }
    case USER_ACTION_TYPES.ADD_USER_SUCCESS: {
      const {userId} = payload;
      return state.map(user => {
        if (user.id !== userId) {
          return user;
        }
        return {
          ...user,
          pending: false
        }
      });
    }
    default:
      return state;
  }
}
