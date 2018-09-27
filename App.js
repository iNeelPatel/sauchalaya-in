import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LocaleProvider } from "antd-mobile-rn";
import enUS from "antd-mobile-rn/lib/locale-provider/en_US";

import { Provider } from "react-redux";
import store from "./store";

import { AsyncStorage } from "react-native";

import {
  appId,
  serverUrl,
  javascriptKey,
  masterKey
} from "react-native-dotenv";

var Parse = require("parse/react-native");

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(appId, javascriptKey, masterKey);
Parse.serverURL = `${serverUrl}/parse`;

import LoginScreen from "./component/form";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LocaleProvider locale={enUS}>
          <View>
            <LoginScreen />
          </View>
        </LocaleProvider>
      </Provider>
    );
  }
}

export default App;
