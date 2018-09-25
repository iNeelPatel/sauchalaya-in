import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LocaleProvider } from "antd-mobile-rn";
import enUS from "antd-mobile-rn/lib/locale-provider/en_US";

import LoginScreen from "./component/form";

class App extends React.Component {
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <View>
          <LoginScreen />
        </View>
      </LocaleProvider>
    );
  }
}

export default App;
