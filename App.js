import React from "react";
import { LocaleProvider } from "antd-mobile-rn";
import enUS from "antd-mobile-rn/lib/locale-provider/en_US";

import { Provider } from "react-redux";
import store from "./store";

import MainNavigator from "./config/navigation";

import { AsyncStorage, KeyboardAvoidingView } from "react-native";

import {
  appId,
  serverUrl,
  javascriptKey,
  masterKey
} from "react-native-dotenv";

var Parse = require("parse/react-native");

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize("sauchalaya-in-api", "m5qW4jvMs%sN5kmN", "m5qW4jvMs%sN5kmN");
Parse.serverURL = `${serverUrl}/parse`;

import LoginScreen from "./component/form";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LocaleProvider locale={enUS}>
          <MainNavigator />
        </LocaleProvider>
      </Provider>
    );
  }
}

export default App;
