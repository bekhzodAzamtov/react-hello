import {createStore} from 'redux';
import {root as rootReducer} from "./reducers/root-reducer";

export const store = createStore(rootReducer);
