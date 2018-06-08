import {
  createStore ,
  combineReducers ,
  applyMiddleware ,
  compose
} from 'redux';
import thunk from 'redux-thunk';

import App from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    App
  }) ,
  composeEnhancers(applyMiddleware(thunk))
);
