import combineReducers from "redux/es/combineReducers";
import {authenticated} from "./authenticated-reducer";
import {usersReducers as users} from "./users-reducers";
import {selectedUserIdReducer as selectedUserId} from "./selected-user-id-reducer";

export const root = combineReducers({
  authenticated ,
  users,
  selectedUserId
});

const FETCH_STATUSES = {
  NOT_STARTED: 'NOT_STARTED',
  STARTED: 'STARTED',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
}

const sampleState = {
  users: {
    data: [],
    fetchTime: new Date(2018,4,4),
    fetchStatus: FETCH_STATUSES.NOT_STARTED,
    fetchError: null
  }
}
