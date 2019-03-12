import * as Firebase from "firebase";
import Axios from "axios";

import { loginSuccess, LoginReques, loginFail } from "../Types";
import { Toast, Languages } from "@common";

export const LOGIN = (email, password, navigation) => {
  return async (disatch, getState) => {
    if (!getState().netInfo.isConnected) {
      Toast(Languages.noInternetConnection, "red");

      return;
    }
    if (email === "" || password === "") return;
    disatch({ type: LoginReques });
    try {
      const res = await Firebase.auth().signInWithEmailAndPassword(
        email,
        password
      );
      disatch({
        type: loginSuccess,
        payload: email
      });
      navigation.navigate("AppStack");
    } catch (error) {
      disatch({ type: loginFail });
      Toast(Languages.InvaildEmailOrPassword);
    }
  };
};
