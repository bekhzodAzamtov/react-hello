import React , {Component} from "react";
import {addUser , addUsersFailed , addUsersSuccess , saveUserPromise} from "../action-creators";
import connect from "react-redux/es/connect/connect";
import {usersSelector} from "../selectors";
import {createSelector} from "reselect";

export class UserManage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {value: {name: '' , age: ''}};
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Name:
          <input value={ this.state.value.name } onChange={ this.updateUserName }/>
        </label>
        <label>
          Age:
          <input value={ this.state.value.age } onChange={ this.updateUserAge }/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }

  handleSubmit = (event) => {
    console.log(this.state.value);
    this.props.addUser(this.state.value);
    event.preventDefault();
  }

  updateUserName = (event) => {
    this.setState({value: {...this.state.value , name: event.target.value}})
  }

  updateUserAge = (event) => {
    this.setState({value: {...this.state.value , age: event.target.value}})
  }
}

export const mapStateToProps = createSelector(
  usersSelector ,
  users => ({users})
)

export const mapDispatchToProps = dispatch => ({
  addUser: (user) => {
    dispatch(addUser(user));
    saveUserPromise(user)
      .then(user => dispatch(addUsersSuccess(user)))
      .catch(error => dispatch(addUsersFailed(error)))
  }
});

export default connect(mapStateToProps , mapDispatchToProps)(UserManage)
