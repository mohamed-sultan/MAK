import React, { PureComponent } from "react";

import { HomeContainer } from "@container";

export default class Home extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    const { navigation } = this.props;
    return <HomeContainer navigation={navigation} />;
  }
}
