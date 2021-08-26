import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/route/index";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LogBox } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import store from "./src/store";
import RTCView from "./src/page/RTCView";

export default function App() {
  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  let [fontsLoaded] = useFonts({
    "Prompt-Regular": require("./assets/fonts/Prompt-Regular.ttf"),
    "Prompt-Medium": require("./assets/fonts/Prompt-Medium.ttf"),
    "Prompt-SemiBold": require("./assets/fonts/Prompt-SemiBold.ttf"),
    "Prompt-Bold": require("./assets/fonts/Prompt-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Provider {...{ store }}>
          <PaperProvider>
            <RecoilRoot>
              <Routes />
              {/* <RTCView /> */}
            </RecoilRoot>
          </PaperProvider>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "Prompt-Regular",
  },
});
