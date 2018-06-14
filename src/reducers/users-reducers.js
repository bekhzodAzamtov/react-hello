import {USER_ACTION_TYPES , FETCH_STATUSES} from '../actions';
import {usersDataBase} from '../action-creators'
import {usersSelector} from "../selectors";

const sampleState = {
  data: [] ,
  fetchTime: new Date() ,
  fetchStatus: FETCH_STATUSES.NOT_STARTED ,
  fetchError: null ,
  addUser: null ,
  addStatus: FETCH_STATUSES.NOT_STARTED ,
  addError: null
}

export const usersReducers = (state = sampleState , action) => {
  const {type , payload} = action;
  console.log('state' , state , type);
  switch (type) {
    case USER_ACTION_TYPES.FETCH_USER_LIST: {
      return {...state , fetchStatus: FETCH_STATUSES.STARTED};
    }
    case USER_ACTION_TYPES.FETCH_USER_LIST_SUCCESS: {
      return {...state , data: payload , fetchTime: new Date() , fetchStatus: FETCH_STATUSES.SUCCESS};
    }
    case USER_ACTION_TYPES.FETCH_USER_LIST_FAILED: {
      return {...state , fetchError: FETCH_STATUSES.ERROR};
    }

    case USER_ACTION_TYPES.ADD_USER: {
      return {...state , addStatus: FETCH_STATUSES.STARTED , addUser: payload};
    }
    case USER_ACTION_TYPES.ADD_USER_FAILED: {
      return {...state , addStatus: FETCH_STATUSES.ERROR , addUser: null};
    }
    case USER_ACTION_TYPES.ADD_USER_SUCCESS: {
      return {...state , addStatus: FETCH_STATUSES.SUCCESS , data: usersSelector().push(payload) , addUser: null};
    }

    default:
      return state;
  }
}
