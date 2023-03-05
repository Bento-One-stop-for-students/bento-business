import { View, Text } from "react-native";
import React from "react";
import TextBox from "../../components/shared/TextBox";

const ItemList = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <TextBox>Items</TextBox>
    </View>
  );
};

export default ItemList;
