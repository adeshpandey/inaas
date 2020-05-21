import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Menu } from "antd";

export class JLogout extends Component {
  logout = () => {
    Auth.logout();
  };
  render() {
    return (
      
    );
  }
}

export default JLogout;
