import React from "react";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";
import { InputItem, Button, Toast } from "antd-mobile-rn";

const { height: screenHeight } = Dimensions.get("window");

import { connect } from "react-redux";
import * as actions from "../actions";

class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "neelpatel.6531@gmail.com",
      password: "12345678"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.onAuthComplete(nextProps);
    }
  }

  onAuthComplete(props) {
    if (props.user && props.user != "invalid") {
      this.setState({ username: undefined, password: undefined });
      this.props.navigation.navigate("home");
    }
  }

  handleSubmit(event) {
    Toast.info(
      "Username : " +
        this.state.username +
        " Password : " +
        this.state.password,
      1
    );
    event.preventDefault();
  }

  render() {
    return (
      <View style={styles.bodyStyle}>
        <Image
          style={{ width: 250, height: 250 }}
          source={require("../../assets/logo.png")}
        />
        <InputItem
          style={styles.TextInputData}
          placeholder="Username"
          value={this.state.username}
          onChangeText={text => this.setState({ username: text })}
        />
        <InputItem
          style={styles.TextInputData}
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />

        <Text>
          {this.props.error
            ? Toast.info("Error" + this.props.error.message, 0.5)
            : " "}
        </Text>

        <Button
          style={styles.ButtonLogin}
          type="primary"
          onClick={() => {
            Toast.loading("Loading");
            this.props.login(this.state.username, this.state.password);
          }}
        >
          Login
        </Button>

        <Text>or</Text>

        <Text style={{ color: "#0080f1" }} onPress={console.log("Press")}>
          Register Now
        </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ login }) => {
  const { error, user } = login;
  console.log(login);
  return { error, user };
};

const styles = StyleSheet.create({
  bodyStyle: {
    flex: 1,
    height: screenHeight,
    backgroundColor: "#FFFFFF",
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center"
  },
  TextInputData: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e8e8e8",
    marginTop: 5,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20
  },
  ButtonLogin: {
    width: "90%"
  }
});

export default connect(
  mapStateToProps,
  actions
)(AuthScreen);
