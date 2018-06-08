import {START_LOADING} from "../constants/actionTypes";

export const INITIAL_STATE = {
  loading: false
};

export default (state = INITIAL_STATE , action) => {
  console.log(state);
  switch (action.payload) {
    case START_LOADING: {
      return {...state , loading: true};
    }
  }
}


export const startLoading = () => ({type: START_LOADING});
