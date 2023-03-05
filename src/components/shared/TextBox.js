import { View, Text } from "react-native";
import React from "react";

const TextBox = (props) => {
  return (
    <Text
      className={`${props.class}`}
      style={{
        fontFamily: `${
          !props.italic ? "Lato_400Regular" : "Pattaya_400Regular"
        }`,
      }}
    >
      {props.children}
    </Text>
  );
};

export default TextBox;
