import HomeBarber from "../screens/barber";
import { StyleSheet, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Status from "../screens/barber/status";

const Tab = createBottomTabNavigator();

const BarberTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#383838",
          alignItems: "center",
          justifyItems: "center",
          elevation: 5,
          borderRadius: 20,
          bottom: 15,
          left: 20,
          right: 20,
          height: 60,
        },
        tabBarIconStyle: {
          top: 8,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeBarber}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="calendar"
              size={24}
              color={focused ? "#c2ffe2" : "#FBFBFB"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="status"
        component={Status}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#c2ffe2" : "#FBFBFB"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BarberTabNavigator;
