import React from "react";

import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeFS from "../screens/foodOrder";
import Status from "../screens/foodOrder/status";
import ItemList from "../screens/foodOrder/itemList.";

const Tab = createBottomTabNavigator();

const FSTabNavigator = () => {
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
        component={HomeFS}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="reorder"
              size={24}
              color={focused ? "#c2ffe2" : "#FBFBFB"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="status"
        component={ItemList}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="fastfood"
              size={24}
              color={focused ? "#c2ffe2" : "#FBFBFB"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="item-list"
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

export default FSTabNavigator;
