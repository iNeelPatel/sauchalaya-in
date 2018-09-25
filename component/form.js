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

class LoginScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    Toast.loading("Loading...", 30, () => {
      console.log("Load complete !!!");
    });

    setTimeout(() => {
      Toast.hide();
    }, 8);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    Toast.info("Value is : " + this.state.value, 1);
    event.preventDefault();
  }

  render() {
    return (
      <View style={{ marginTop: StatusBar.currentHeight }}>
        <Flex>
          <Flex.Item>
            <List renderHeader={() => "Login Details"}>
              <InputItem
                placeholder="User name"
                value={this.state.value}
                onChangeText={text => this.setState({ value: text })}
              />
              <WhiteSpace />
              <Button onClick={this.handleSubmit}>
                Toast Value of text box
              </Button>
            </List>
          </Flex.Item>
        </Flex>
      </View>
    );
  }
}

export default LoginScreenComponent;
