import {USER_ACTION_TYPES} from "./actions";

export const addUser = (user) => {
  return {
    type: USER_ACTION_TYPES.ADD_USER ,
    payload: {
      user
    }
  }
}

export const fetchUsers = () => {
  return {
    type: USER_ACTION_TYPES.FETCH_USER_LIST
  }
}
export const fetchUsersFailed = (error) => {
  return {
    type: USER_ACTION_TYPES.FETCH_USER_LIST_FAILED ,
    payload: error
  }
}
export const fetchUsersSuccess = (users) => {
  return {
    type: USER_ACTION_TYPES.FETCH_USER_LIST_SUCCESS ,
    payload: users
  }
}

export function fetchUsersPromise() {
  return Promise.resolve([
    {id: 1 , name: 'Azamatov' , age: "26"} ,
    {id: 2 , name: 'Xasanov' , age: "27"} ,
    {id: 3 , name: 'Jo`rayev' , age: "25"} ,
  ]);
}
