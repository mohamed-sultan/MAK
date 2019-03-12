import React, { PureComponent } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Keyboard,
  Dimensions,
  Alert,
  ActivityIndicator
} from "react-native";
import { Item } from "native-base";
import { connect } from "react-redux";
import * as Yup from "yup";

import { Ionicons } from "@expo/vector-icons";

import {
  Icons,
  Color,
  Device,
  Images,
  Styles,
  Toast,
  Languages
} from "@common";
import { signup } from "@action";
import styles from "./css";

const { height, width } = Dimensions.get("window");

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required()
});
const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required()
    .min(6)
});

class componentName extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: {
        email: false,
        password: false
      },
      width: 150,
      height: 200
    };
  }
  componentDidMount() {
    this._keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyBoardDidShow
    );
    this._keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyBoardDidHide
    );
    setTimeout(() => {
      this.ScrollView.scrollTo({ x: 0, y: 100, animated: true });
    }, 300);
  }
  componentWillUnmount() {
    this._keyboardDidShowListener.remove();
    this._keyboardDidHideListener.remove();
  }

  _keyBoardDidShow = e => {
    this.ScrollView.scrollTo({ x: 0, y: 150, animated: true });
    this.setState({ width: 100, height: 100 });
  };

  _keyBoardDidHide = () => {
    this.ScrollView.scrollTo({ x: 0, y: 100, animated: true });
    this.setState({ width: 150, height: 200 });
  };

  _handleRegister = async () => {
    const ValidE = this._ValidateEmail();
    const ValidP = this._validatePassword();
    if (!this.props.connected) {
      Toast(Languages.noInternetConnection, "black");
      return;
    }
    if (this.state.error.email || this.state.error.password) {
      Toast(Languages.CorrectTheError, "black");
      return;
    }
    if (!ValidE || !ValidP) {
      Toast(Languages.validationError, "black");
      return;
    } else {
      await this.props.signup(
        this.state.email,
        this.state.password,
        this.props.navigation
      );
    }
  };
  _ValidateEmail = async () => {
    let valid = await EmailSchema.isValid({
      email: this.state.email
    });
    if (valid) {
      this.setState({
        error: { ...this.state.error, email: false }
      });
      this._password.focus();
    } else {
      this.setState({
        error: { ...this.state.error, email: true }
      });
    }
    return valid;
  };
  _validatePassword = async () => {
    let valid = await PasswordSchema.isValid({
      password: this.state.password
    });
    if (valid) {
      this.setState({
        error: { ...this.state.error, password: false }
      });
    } else {
      this.setState({
        error: { ...this.state.error, password: true }
      });
    }
    Keyboard.dismiss();
    return valid;
  };
  render() {
    const { error } = this.state;
    const { loading } = this.props.user;
    return (
      <ImageBackground
        source={Images.Login.background}
        style={styles.imageBackground}
      >
        <View style={{ flex: 1, height }}>
          <ScrollView
            ref={ref => {
              this.ScrollView = ref;
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.container}>
              <View style={styles.scrolContent}>
                <Image
                  source={Images.Login.logo}
                  resizeMode="contain"
                  style={{ width: this.state.width, height: this.state.height }}
                />
                <Text style={styles.subtitle}>{Languages.HeadTitle1}</Text>
                <Text style={styles.subtitle}>{Languages.HeadTitle2}</Text>
                <Item
                  regular
                  style={[
                    styles.Item,
                    { borderColor: error.email ? "red" : "white" }
                  ]}
                >
                  <TextInput
                    value={this.state.email}
                    placeholder={Languages.Email}
                    placeholderTextColor="white"
                    textContentType="emailAddress"
                    onChangeText={text => this.setState({ email: text })}
                    stackedLabel={false}
                    clearTextOnFocus={false}
                    returnKeyType="next"
                    keyboardType="email-address"
                    style={styles.TextInput}
                    onSubmitEditing={this._ValidateEmail}
                  />
                </Item>
                <Item
                  regular
                  style={[
                    styles.Item,
                    { borderColor: error.password ? "red" : "white" }
                  ]}
                >
                  <TextInput
                    value={this.state.password}
                    placeholder={Languages.Password}
                    placeholderTextColor="white"
                    textContentType="password"
                    onChangeText={text => this.setState({ password: text })}
                    stackedLabel={false}
                    clearTextOnFocus={false}
                    secureTextEntry={true}
                    style={styles.TextInput}
                    ref={re => (this._password = re)}
                    returnKeyType="done"
                    onSubmitEditing={this._validatePassword}
                    onEndEditing={() => {
                      Keyboard.dismiss();
                    }}
                  />
                </Item>
                <TouchableOpacity
                  style={styles.LoginButton}
                  onPress={this._handleRegister}
                  activeOpacity={0.5}
                >
                  {!loading && (
                    <Text style={styles.LoginText}>{Languages.Login}</Text>
                  )}
                  {loading && (
                    <ActivityIndicator size="large" color={Color.main} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            position: "absolute",
            top: 20,
            left: 30
          }}
        >
          <Ionicons name="md-arrow-back" size={40} color="white" />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const mapstate = state => {
  return {
    user: state.user,
    connected: state.netInfo.isConnected
  };
};

export default connect(
  mapstate,
  { signup }
)(componentName);
