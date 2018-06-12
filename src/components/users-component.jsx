import React , {Component} from "react";
import {connect} from 'react-redux';
import {usersSelector} from "../selectors";
import {fetchUsers , fetchUsersFailed , fetchUsersPromise , fetchUsersSuccess} from "../action-creators";
import {createSelector} from "reselect";

export class UsersComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.getUsersList();
  }

  getTr(user , index) {
    return (<tr key={index}>
      <td>
        { index }
      </td>
      <td>
        { user.name }
      </td>
      <td>
        { user.age }
      </td>
    </tr>)
  }

  render() {
    const {users} = this.props;
    return <div>
      <table>
        <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
        </tr>
        </thead>
        <tbody>
        { users.map((user , index) => this.getTr(user , index)) }
        </tbody>
      </table>
    </div>
  }
}

export const mapStateToProps = createSelector(
  usersSelector ,
  users => ({users})
)

export const mapDispatchToProps = dispatch => ({
  getUsersList: () => {
    dispatch(fetchUsers())
    fetchUsersPromise()
      .then(users => dispatch(fetchUsersSuccess(users)))
      .catch(error => dispatch(fetchUsersFailed(error)))
  }
});

export default connect(
  mapStateToProps ,
  mapDispatchToProps
)(UsersComponent)
