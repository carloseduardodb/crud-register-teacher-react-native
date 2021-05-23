import { StatusBar } from "react-native";
import React from "react";
import Routes from "./src/routes";
import AppLoading from "expo-app-loading";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
