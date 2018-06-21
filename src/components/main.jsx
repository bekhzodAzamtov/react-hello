import React from "react";
import {userState} from "../service/UserState";
import {UserInfo} from "./user-info";

export class Main extends React.Component {

  constructor(props) {
    super();
    this.props = props
    this.state = userState;
  }

  render() {
    let inputForm =
      React.createElement('form' , {} ,
        React.createElement('h1' , {} , 'Username') ,
        <ul>
          { [1 , 2 , 3].map((n , i) => <li key={ i }>{ n }</li>) }
        </ul> ,
        <input type="text" text="Username"/>
      )
    let users = '';
    userState.getList()
      .forEach(user => {
        users +=
          <div>
            <UserInfo user={ user }/>
          </div>
      });
    return inputForm;
  }
}
