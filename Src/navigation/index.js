import React from "react";

import { I18nManager } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationActions,
  createSwitchNavigator
} from "react-navigation";

import {
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
  MaterialIcons,
  AntDesign
} from "@expo/vector-icons";

import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HomeScreen from "./HomeScreen";
import AuthLoadingScreen from "./AuthLoadingScreen";

import { Color, Icons, Styles } from "@common";

const AuthStack = createStackNavigator(
  {
    LoginScreen,
    RegisterScreen
  },
  {
    initialRouteName: "LoginScreen",

    mode: "modal",

    navigationOptions: {
      gestureDirection: I18nManager.isRTL ? "inverted" : "default"
    }
  }
);
const AppStack = createStackNavigator({ HomeScreen });

export default createSwitchNavigator(
  {
    AuthLoadingScreen,
    AppStack,
    AuthStack
  },
  {
    initialRouteName: "AuthLoadingScreen"
  }
);
