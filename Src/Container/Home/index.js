import React, { PureComponent } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { logOut } from "@action";
import {
  Icons,
  Color,
  Device,
  Images,
  Styles,
  Toast,
  Languages
} from "@common";

import Store from "@redux";
class componentName extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        source={Images.Login.background}
        style={styles.ImageBackground}
      >
        <View style={styles.userDashboard}>
          <Text style={styles.userDashboardText}>
            {Store.getState().user.data}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.logOut(navigation)}
          style={styles.buttom}
        >
          <Text style={styles.text}>{Languages.LogOut}</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

mapState = state => {
  return {};
};

export default connect(
  mapState,
  { logOut }
)(componentName);

const styles = StyleSheet.create({
  ImageBackground: { width: "100%", height: "100%" },
  buttom: {
    position: "absolute",
    bottom: 10,
    width: "90%",
    alignSelf: "center",
    height: 50,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.main
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20
  },
  userDashboard: {
    position: "absolute",
    top: "40%",
    width: "50%",
    alignSelf: "center",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 14,
    zIndex: 100
  },
  userDashboardText: {
    color: Color.main,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600"
  }
});
