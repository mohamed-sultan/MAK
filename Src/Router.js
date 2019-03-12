import React from "react";
import { View, StyleSheet } from "react-native";
import { Constants } from "expo";

import Navigation from "@navigation";
import { MYNetInfo, MyToast } from "@container";

export default class Router extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1, height: "100%", backgroundColor: "tranaprent" }}>
        <MyToast />
        <Navigation ref={comp => (this.navigator = comp)} />
        <MYNetInfo />
      </View>
    );
  }
}
