import React from "react";

export class UserInfo extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    console.log('wetda' , this.props);
    return <div>
      <h1>
        Username: { this.props.user.name },
      </h1>
      <h2>
        added: { new Date() }
      </h2>
    </div>;
  }
}
