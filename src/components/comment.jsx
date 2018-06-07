import React from "react";
import {UserInfo} from "./user-info";

export class Comment extends React.Component {
  comments = [];

  render(user) {
    const element = this.comments.map(comment => {
      <div>
        <UserInfo user={}/>
      </div>
    });
    return
  }
}
