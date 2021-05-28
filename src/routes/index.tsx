import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Pages/Home";
import Added from "../Pages/Added";
import Management from "../Pages/Management";
import Editing from "../Pages/Editing";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#fff",
          },
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Added" component={Added} />
        <AppStack.Screen name="Management" component={Management} />
        <AppStack.Screen name="Editing" component={Editing} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
