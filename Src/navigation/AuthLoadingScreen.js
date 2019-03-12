import React from "react";

import { connect } from "react-redux";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = () => {
    const user = this.props.user.data != null;
    if (user) {
      this.props.navigation.navigate("AppStack");
    } else {
      this.props.navigation.navigate("AuthStack");
    }
  };

  render() {
    return null;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(AuthLoadingScreen);
