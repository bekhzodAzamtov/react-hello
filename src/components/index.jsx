import React from "react";
import Provider from "react-redux/es/components/Provider";
import {store} from "../store";
import {Headers} from "./header";
import Content from "./content";

export default class App extends React.Component {

  render() {
    return (
      <Provider store={ store }>
        <div>
          <Headers/>
          <Content/>
        </div>
      </Provider>
    );
  }
}
