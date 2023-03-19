import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import TextBox from "../../shared/TextBox";

const ListItem = ({ item, index, setShowEditItemModal, setEditItemData }) => {
  return (
    <View
      className="w-full  p-5 border-b border-b-gray-500 items-center flex-row justify-between"
      key={item.id}
    >
      <View className="flex-row items-center justify-center">
        <View className="w-12 h-12 items-center justify-center bg-secondary-1 rounded-full mr-2">
          <TextBox class="text-white">{index + 1} </TextBox>
        </View>
        <View>
          <TextBox>Name: {item.name}</TextBox>
          <TextBox>Price: {item.price}</TextBox>
          <TextBox>Availaible : {item.qty}</TextBox>
        </View>
      </View>
      <View className="flex-row items-center justify-center">
        <Image
          className="w-20 h-20"
          source={{
            uri: `${item.img_url}`,
          }}
          resizeMode="center"
        />
        <TouchableOpacity
          className="ml-2 bg-primary-1 p-5 rounded-3xl"
          onPress={() => {
            setEditItemData(item);
            setShowEditItemModal(true);
          }}
        >
          <TextBox class="text-white">Edit</TextBox>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListItem;
