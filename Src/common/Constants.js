import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Constants = {
  Dimension: {
    ScreenWidth(percent = 1) {
      return Dimensions.get("window").width * percent;
    },
    ScreenHeight(percent = 1) {
      return Dimensions.get("window").height * percent;
    }
  }
};

export default Constants;
