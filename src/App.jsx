import React from 'react';
import * as ReactDOM from "react-dom";
import App from './components/index'
import {store} from "./store";
import BrowserRouter from "react-router-dom/es/BrowserRouter";

const render = () => ReactDOM.render(
  (<BrowserRouter>
    <App/>
  </BrowserRouter>) ,
  document.getElementById('root')
);

render();
store.subscribe(render);
