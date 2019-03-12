import React, { PureComponent } from "react";

import { LoginContiner } from "@container";

export default class Login extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    const { navigation } = this.props;
    return <LoginContiner navigation={navigation} />;
  }
}
