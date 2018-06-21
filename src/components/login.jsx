import React , {Component} from "react";
import {createSelector} from "reselect";
import {getToken , getTokenFailed , getTokenSuccess , loginPromise} from "../action-creators";
import connect from "react-redux/es/connect/connect";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {credentials: {username: '' , password: ''}};
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Name:
          <input value={ this.state.value.username } onChange={ this.updateUsername }/>
        </label>
        <label>
          Age:
          <input value={ this.state.value.password } onChange={ this.updatePassword }/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }

  handleSubmit = (event) => {
    this.props.addUser(this.state.value);
    event.preventDefault();
  }

  updateUsername = (event) => {
    this.setState({value: {...this.state.value , username: event.target.value}})
  }

  updatePassword = (event) => {
    this.setState({value: {...this.state.value , password: event.target.value}})
  }
}

const mapStateToProps = createSelector();

const mapDispatchToProps = dispatch => ({
  login: (username , password) => {
    dispatch(getToken({username , password}));
    loginPromise({username , password}).then(token => {
      console.log(token);
      dispatch(getTokenSuccess(token));
    }).catch(error => dispatch(getTokenFailed(error)))

  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
