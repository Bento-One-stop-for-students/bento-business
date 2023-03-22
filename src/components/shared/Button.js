import React from "react";

import {
  View,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import TextBox from "./TextBox";

const Button = (props) => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={{ elevation: 3 }}
      className="rounded-3xl"
      disabled={props.disabled}
    >
      <LinearGradient
        colors={
          props.disabled ? ["#A7A7AD", "#414141"] : ["#6ECBFF", "#559AFF"]
        }
        className="w-[80vw] h-[8vh] rounded-3xl items-center justify-center "
      >
        <View className="flex-row items-center justify-center">
          {props.disabled ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <TextBox class="text-lg text-white ml-3">{props.text}</TextBox>
          )}
        </View>
      </LinearGradient>
    </TouchableHighlight>
  );
};

export default Button;
