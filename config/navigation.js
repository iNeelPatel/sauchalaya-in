import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import AuthScreen from "../src/screens/AuthScreen";
import HomeScreen from "../src/screens/HomeScreen";

const MainNavigator = createStackNavigator(
  {
    auth: { screen: AuthScreen },
    home: { screen: HomeScreen }
  },
  {
    initialRouteName: "auth",
    headerMode: "none"
  }
);

export default MainNavigator;
