import { View, Text } from "react-native";
import React from "react";

const ViewBox = (props) => {
  return (
    <View
      className="items-center justify-start"
      style={{ fontFamily: "Lato_400Regular" }}
    >
      {props.children}
    </View>
  );
};

export default ViewBox;
