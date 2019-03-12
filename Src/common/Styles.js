import { Dimensions, Platform } from "react-native";

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  moderateScale
} from "./ResponsiveDimentions";
const fontSize = {
  small: responsiveFontSize(2.5),
  medium: responsiveFontSize(3),
  large: responsiveFontSize(8)
};
const { height, width, heightWindow } = Dimensions.get("window");

const Styles = {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
  moderateScale,
  fontSize: {
    small: responsiveFontSize(2.5),
    medium: responsiveFontSize(3),
    large: responsiveFontSize(8)
  },

  width: Dimensions.get("window").width,
  height: Platform.OS !== "ios" ? height : height - 20,
  navBarHeight: Platform !== "ios" ? height - heightWindow : 0,
  headerHeight: Platform.OS === "ios" ? 40 : 56
};

export default Styles;
