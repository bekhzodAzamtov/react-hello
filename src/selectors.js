import {createSelector} from "reselect";

export const authenticatedSelector = state => state.authenticated;

export const usersSelector = store => store.users;

export const selectedUserIdSelector = store => store.selectedUserId;

export const selectedUser = createSelector(
  usersSelector ,
  selectedUserIdSelector ,
  (users , selectedUserId) => users.find(user => user.id === selectedUserId)
)
