import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import AuthScreen from "../src/screens/AuthScreen";

const MainNavigator = createStackNavigator(
  {
    auth: { screen: AuthScreen }
  },
  {
    initialRouteName: "auth",
    headerMode: "none"
  }
);

export default MainNavigator;
