import React, { Component } from "react";
import { BackHandler, Alert } from "react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import { AppLoading } from "expo";

import * as Firebase from "firebase";
var config = {
  apiKey: "AIzaSyD7MjxARaavBqjV7rylC8KIplBjR2TQFug",
  authDomain: "kbhaz-c0e2e.firebaseapp.com",
  databaseURL: "https://kbhaz-c0e2e.firebaseio.com",
  projectId: "kbhaz-c0e2e",
  storageBucket: "kbhaz-c0e2e.appspot.com",
  messagingSenderId: "602519919656"
};

import store from "@redux";
import Router from "./Router";

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class Main extends Component {
  state = {
    isReady: false
  };
  async componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
    Firebase.initializeApp(config);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    Alert.alert(
      "Exit App",
      "Do you want to exit?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => BackHandler.exitApp() }
      ],
      { cancelable: false }
    );
    return true;
  };
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require("../assets/background.jpg"),
      require("../assets/splash.png")
    ]);

    await Promise.all([...imageAssets]);
  }

  render() {
    const persistor = persistStore(store);
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    }

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}
