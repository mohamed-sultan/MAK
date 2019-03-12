import Expo from "expo";
const locate = Expo.DangerZone.Localization.getCurrentLocaleAsync();

const Languages = {
  ar: {},
  en: {
    Email: "Email",
    Password: "Password",
    HeadTitle1: "DUBAI'S FIRST & BEST",
    HeadTitle2: "BAKERY DELIVERY",
    Login: "start using makbouz",
    SignUp: "signUp",
    signWithFacebook: "sign with facebook",
    validationError: "please fill all fields",
    CorrectTheError: "please correct the errors above",
    noInternetConnection: "plz check your internet connection",
    SomeThingWentWrong: "some thing went wrong",
    LogOut: "Log Out",
    InvaildEmailOrPassword: "bad credentials",
    EmailAlreadyExist: "Email Taken"
  }
};

let Language = Languages["en"];

export default Language;
