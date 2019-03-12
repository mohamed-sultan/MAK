import { Facebook } from "expo";

import { loginSuccess, LoginReques, loginFail } from "../Types";
import { Toast, Languages } from "@common";

try {
} catch ({ message }) {
  alert(`Facebook Login Error: ${message}`);
}

export const LOGINFB = navigation => {
  return async (disatch, getState) => {
    if (!getState().netInfo.isConnected) {
      Toast(Languages.noInternetConnection, "red");
      return;
    }
    disatch({ type: LoginReques });
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions
      } = await Facebook.logInWithReadPermissionsAsync("1510060955792852", {
        permissions: ["public_profile"]
      });
      if (type === "success") {
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,birthday,picture.type(large)`
        );
        const { picture, name, birthday } = await response.json();

        disatch({
          type: loginSuccess,
          payload: name
        });
        navigation.navigate("AppStack");
      } else {
        // type === 'cancel'
      }
    } catch (error) {
      disatch({ type: loginFail });
      Toast(Languages.SomeThingWentWrong);
    }
  };
};
