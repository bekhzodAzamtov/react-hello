import combineReducers from "redux/es/combineReducers";
import {authenticated} from "./authenticated-reducer";
import {usersReducers as users} from "./users-reducers";
import {selectedUserIdReducer as selectedUserId} from "./selected-user-id-reducer";

export const root = combineReducers({
  authenticated ,
  users,
  selectedUserId
});


