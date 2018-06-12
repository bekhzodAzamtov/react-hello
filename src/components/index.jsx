import React from "react";
import UsersComponent from "./users-component";
import Provider from "react-redux/es/components/Provider";
import {store} from "../store";

export default class App extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>Users</li>
          <Provider store={ store }>
            <UsersComponent/>
          </Provider>
        </ul>
      </div>
    );
  }
}
