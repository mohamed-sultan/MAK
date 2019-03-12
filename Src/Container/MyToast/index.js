import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import Toast, { DURATION } from "react-native-easy-toast";
import { connect } from "react-redux";
import { responsiveFontSize } from "../../common/ResponsiveDimentions";
class TToast extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "gray"
    };
  }

  componentWillReceiveProps = ({ Recived }) => {
    if (Recived) {
      this.setState({ backgroundColor: Recived.color });
      this.refs.toast.show(Recived.ms, Recived.duration);
    }
  };

  render() {
    const { Recived } = this.props;

    return (
      <Toast
        ref="toast"
        style={{
          backgroundColor: this.state.backgroundColor,
          borderRadius: 14,
          width: "60%",
          justifyContent: "center",
          alignItems: "center"
        }}
        textStyle={{
          color: "white",
          fontWeight: "600"
          //fontsize: responsiveFontSize(1.5)
        }}
        positionValue={100}
        fadeInDuration={750}
        fadeOutDuration={1000}
        opacity={0.8}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    Recived: state.toast
  };
};

export default connect(mapStateToProps)(TToast);
