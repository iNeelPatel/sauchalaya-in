import React from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import {
  Flex,
  WhiteSpace,
  List,
  InputItem,
  Button,
  Toast
} from "antd-mobile-rn";

import { connect } from "react-redux";

class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "neelpatel.6531@gmail.com",
      password: "neelpatel"
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
      this.props.navigation.navigate("welcome");
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
      <View style={{ marginTop: StatusBar.currentHeight }}>
        <Flex>
          <Flex.Item>
            <List renderHeader={() => "Login Details"}>
              <InputItem
                placeholder="Username"
                value={this.state.username}
                onChangeText={text => this.setState({ username: text })}
              />
              <InputItem
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChangeText={text => this.setState({ password: text })}
              />
              <WhiteSpace />
              <Button type="primary" onClick={this.handleSubmit}>
                Login
              </Button>
            </List>
          </Flex.Item>
        </Flex>
      </View>
    );
  }
}

export default AuthScreen;
