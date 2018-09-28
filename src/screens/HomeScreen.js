import React from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import { Flex, Toast } from "antd-mobile-rn";

import { connect } from "react-redux";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ marginTop: StatusBar.currentHeight }}>
        <Flex>
          <Flex.Item>
            <Text>This is home</Text>
          </Flex.Item>
        </Flex>
      </View>
    );
  }
}

export default HomeScreen;
