import React, { PureComponent } from "react";

import { RegisterContainer } from "@container";

export default class Login extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return <RegisterContainer navigation={this.props.navigation} />;
  }
}
