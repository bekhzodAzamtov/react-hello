import React from 'react';
import * as ReactDOM from "react-dom";
import App from './components/index'
import {store} from "./store";

const render = () => ReactDOM.render(
  <App/> ,
  document.getElementById('root')
);

render();
store.subscribe(render);
