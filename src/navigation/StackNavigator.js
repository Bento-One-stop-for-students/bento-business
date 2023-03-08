import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import HomeFS from "../screens/foodOrder";
import Home from "../screens/Auth";
import SignIn from "../screens/Auth/signIn";
import BarberTabNavigator from "./BarberTabNavigator";
import FSTabNavigator from "./FoodServiceTabNavigator";
import { AuthContext } from "../../lib/context/authContext";
import { StatusBar } from "expo-status-bar";

const FS = createStackNavigator();
const Auth = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="home"
    >
      <Auth.Screen name="home" component={Home} />
      <Auth.Screen name="sign-in" component={SignIn} />
    </Auth.Navigator>
  );
};

const FSNavigator = () => {
  return (
    <FS.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="home"
    >
      <FS.Screen name="home" component={HomeFS} />
    </FS.Navigator>
  );
};

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { state } = React.useContext(AuthContext);
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      >
        {state.profession == "barber" ? (
          <Stack.Screen name="barber" component={BarberTabNavigator} />
        ) : (
          <Stack.Screen name="food-service" component={FSTabNavigator} />
        )}
      </Stack.Navigator>
  );
};

export default StackNavigator;
