import {USER_ACTION_TYPES} from "./actions";

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

export const addUser = (user) => {
  return {
    type: USER_ACTION_TYPES.ADD_USER ,
    payload: user
  }
}

export const addUsersSuccess = (user) => {
  return {
    type: USER_ACTION_TYPES.ADD_USER_SUCCESS ,
    payload: user
  }
}
export const addUsersFailed = (error) => {
  return {
    type: USER_ACTION_TYPES.ADD_USER_FAILED ,
    payload: error
  }
}

export function fetchUsersPromise() {
  return Promise.resolve(usersDataBase);
}

export let usersDataBase = [
  {id: 1 , name: 'Azamatov' , age: "26"} ,
  {id: 2 , name: 'Xasanov' , age: "27"} ,
  {id: 3 , name: 'Jo`rayev' , age: "25"} ,
]

export function saveUserPromise(user) {
  user.id = new Date().getTime();
  usersDataBase.push(user);
  return Promise.resolve(user);
}
