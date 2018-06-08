import React from 'react';
import {Provider} from 'react-redux';
import * as ReactDOM from "react-dom";
import store from './store'
import App from './components/app/index'

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider> ,
  document.getElementById('root')
);
