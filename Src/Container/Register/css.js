import { StyleSheet, Dimensions } from "react-native";

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  moderateScale
} from "@common/ResponsiveDimentions";

const fontSize = {
  small: responsiveFontSize(2.2),
  medium: responsiveFontSize(3),
  large: responsiveFontSize(8)
};

const { height } = Dimensions.get("window");

import { Color } from "@common";
export default StyleSheet.create({
  imageBackground: {
    width: "100%",
    height,
    flex: 1
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10
  },
  scrolContent: {
    marginTop: height / 4,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  Item: {
    //backgroundColor: Color.white,
    marginRight: moderateScale(10),
    marginLeft: moderateScale(10),
    marginTop: moderateScale(5),
    height: responsiveHeight(8),
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 14
  },
  TextInput: {
    flex: 1,
    fontSize: fontSize.small,
    height: responsiveHeight(5),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    height: "100%",
    paddingTop: moderateScale(2),
    color: "white"
  },
  input: {
    width: "85%",
    alignSelf: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 18,
    height: 50
  },
  text: {
    fontSize: 18,
    fontWeight: "200",
    color: "white"
  },
  bootomText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white"
  },
  subtitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "800"
  },
  LoginButton: {
    height: responsiveHeight(9),
    backgroundColor: "#e6d7bd",
    marginTop: moderateScale(8),
    marginBottom: moderateScale(10),
    width: "85%",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  LoginText: {
    color: Color.main,
    fontWeight: "bold",
    fontSize: fontSize.small
  },
  faceBookAndSignUpWrapper: {
    flexDirection: "row-reverse",
    width: "80%",
    alignSelf: "center"
  },
  ButtonSignup: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.main,
    height: responsiveHeight(7),
    marginHorizontal: 5,
    borderRadius: 10
  },
  ButtonSignupText: {
    color: "white",
    fontWeight: "bold",
    fontSize: fontSize.small
  },
  ButtonFacebook: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    height: responsiveHeight(7),
    marginHorizontal: 5,
    borderRadius: 10
  },
  ButtonFacebookText: {
    color: "white",
    fontWeight: "bold",
    fontSize: fontSize.small
  }
});
