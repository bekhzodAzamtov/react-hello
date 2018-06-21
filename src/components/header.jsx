import React , {Component} from "react";
import Link from "react-router-dom/es/Link";

export class Headers extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Main</Link>

        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>);
  }
}

