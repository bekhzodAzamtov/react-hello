import {connect} from 'react-redux';
import {startLoading} from "./demo-reducer";
import App from "../components/app";

export default connect(
  state => ({
    isLoading: state.app.loading
  }) ,
  dispatch => ({
    onButtonClick: dispatch(startLoading())
  })
)(App);
