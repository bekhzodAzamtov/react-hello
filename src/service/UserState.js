export class UserState {
  constructor(users) {
    this.users = users;
  }

  addUser(user) {
    return this.users.push(user);
  }

  getList() {
    return this.users;
  }

  refreshUsers() {
    this.users = [];
  }
}

export const initialState = [
  {username: 'Bexzod'} ,
  {username: 'Sherzod'}
]

export const userState = new UserState(initialState);
