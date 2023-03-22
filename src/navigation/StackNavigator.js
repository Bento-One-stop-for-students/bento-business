import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import SignIn from "../screens/Auth/signIn";
import BarberTabNavigator from "./BarberTabNavigator";
import FSTabNavigator from "./FoodServiceTabNavigator";
import { AuthContext } from "../../lib/context/authContext";

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
      {!state.isLoggedIn ? (
        <>
          <Stack.Screen name="sign-in" component={SignIn} />
        </>
      ) : state.profession == "barber" ? (
        <Stack.Screen name="barber" component={BarberTabNavigator} />
      ) : (
        <Stack.Screen name="food-service" component={FSTabNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
