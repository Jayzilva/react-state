import React, { Component } from "react";

export class NewCom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Subscribe to the Channel !",
      sub: "Subscribe",
      bellIcon: "🔔 ",
    };
  }

  ButtonChange = () => {
    this.setState({
      message: "Hit the bell icon to never miss an update",
      sub: "Subscribed",
    });
  };

  ImageChange = () => {
    this.setState({
      bellIcon: "❤️",
      message: "Thank You",
    });
  };

  render() {
    return (
      <div className="App-link">
        <h3>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <button onClick={this.ImageChange}>{this.state.bellIcon}</button>
      </div>
    );
  }
}

export default NewCom;
