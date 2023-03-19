import { View, Text, Pressable, FlatList, ToastAndroid } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import TextBox from "../../components/shared/TextBox";
import ListItem from "../../components/food-service/items-list/ListItem";
import AddItemModal from "../../components/food-service/items-list/AddItemModal";
import EditItemModal from "../../components/food-service/items-list/EditItemModal";
import { getAllFoodItems } from "../../../lib/firebase/snackmen";

const ItemsList = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const prepare = async () => {
      try {
        const res = await getAllFoodItems();
        setData(res);
      } catch (error) {
        ToastAndroid.showWithGravityAndOffset(
          "Couldn't fetch items from server.",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
        console.log(error);
      }
    };
    prepare();
  }, []);
  const [editItemData, setEditItemData] = React.useState();
  const [showAddItemModal, setShowAddItemModal] = React.useState(false);
  const [showEditItemModal, setShowEditItemModal] = React.useState(false);
  React.useEffect(() => {}, [editItemData]);
  return (
    <View className="flex-1 w-full items-center justify-start bg-primary-2">
      <View className="w-full mt-3 flex-row items-center justify-around border-b border-b-primary-1 pb-2">
        <TextBox class="text-secondary-1 text-3xl" italic>
          Items List
        </TextBox>
        <Pressable
          onPress={() => {
            setShowAddItemModal(true);
          }}
        >
          <Ionicons name="add-circle-outline" size={40} color="black" />
        </Pressable>
      </View>
      <FlatList
        className="w-full h-full bg-primary-2"
        data={data}
        renderItem={({ item, index }) => (
          <ListItem
            item={item}
            index={index}
            setShowEditItemModal={setShowEditItemModal}
            setEditItemData={setEditItemData}
          />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <AddItemModal isOpen={showAddItemModal} onClose={setShowAddItemModal} />
      {editItemData && (
        <EditItemModal
          isOpen={showEditItemModal}
          onClose={setShowEditItemModal}
          itemData={editItemData}
          setItemData={setEditItemData}
        />
      )}
    </View>
  );
};

export default ItemsList;
