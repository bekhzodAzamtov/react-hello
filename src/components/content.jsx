import React , {Component} from "react";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import {Main} from "./main";
import UsersComponent from "./users-component";
import connect from "react-redux/es/connect/connect";
import {authenticatedSelector} from "../selectors";
import {createSelector} from "reselect";
// import {Login} from "./login";

export class Content extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (<div>
      <Switch>
        <Route exact path="/" component={ Main }/>
        {/*<PrivateRoute path="/users" component={ UsersComponent } props={ this.props.getCurrentUser() }/>*/}
        {/*<Route path='/login' component={ Login }/>*/}
        <Route path="/users" component={ UsersComponent }/>
      </Switch>
    </div>);
  }
}

// export const PrivateRoute = ({component: Component , authed , ...rest}) => {
//   console.log(authed , rest);
//   return (
    {/*<Route { ...rest } render={ props => (authed ? <Component { ...props }/> : <Redirect to="/login"/>) }/>*/}
  // );
// }

export const mapToStateProps = createSelector(
  authenticatedSelector ,
  authenticated => ({currentUser: authenticated})
)


export const mapDispatchToProps = dispatch => ({
  // getCurrentUser: () => {
  //   return true;
  // } ,

})


export default connect(mapToStateProps , mapDispatchToProps)(Content)
