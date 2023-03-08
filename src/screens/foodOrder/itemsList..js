import { View, Text, Pressable, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import TextBox from "../../components/shared/TextBox";
import ListItem from "../../components/food-service/items-list/ListItem";
import AddItemModal from "../../components/food-service/items-list/AddItemModal";
import EditItemModal from "../../components/food-service/items-list/EditItemModal";

const data = [
  {
    id: 1,
    name: "lays",
    qty: 4,
    price: 10,
    imgUrl:
      "https://www.bigbasket.com/media/uploads/p/xxl/40202279_6-lays-potato-chips-classic-salted-best-quality-crunchy.jpg",
  },
  {
    id: 2,
    name: "kurkure",
    qty: 20,
    price: 10,
    imgUrl:
      "https://www.bigbasket.com/media/uploads/p/xxl/40202279_6-lays-potato-chips-classic-salted-best-quality-crunchy.jpg",
  },
  {
    id: 3,
    name: "lays",
    qty: 10,
    price: 20,
    imgUrl:
      "https://www.bigbasket.com/media/uploads/p/xxl/40202279_6-lays-potato-chips-classic-salted-best-quality-crunchy.jpg",
  },
  {
    id: 4,
    name: "lays",
    qty: 10,
    price: 20,
    imgUrl:
      "https://www.bigbasket.com/media/uploads/p/xxl/40202279_6-lays-potato-chips-classic-salted-best-quality-crunchy.jpg",
  },
  {
    id: 5,
    name: "lays",
    qty: 10,
    price: 20,
    imgUrl:
      "https://www.bigbasket.com/media/uploads/p/xxl/40202279_6-lays-potato-chips-classic-salted-best-quality-crunchy.jpg",
  },
  {
    id: 6,
    name: "lays",
    qty: 10,
    price: 20,
    imgUrl:
      "https://www.bigbasket.com/media/uploads/p/xxl/40202279_6-lays-potato-chips-classic-salted-best-quality-crunchy.jpg",
  },
  {
    id: 7,
    name: "lays",
    qty: 10,
    price: 20,
    imgUrl:
      "https://www.bigbasket.com/media/uploads/p/xxl/40202279_6-lays-potato-chips-classic-salted-best-quality-crunchy.jpg",
  },
  {
    id: 8,
    name: "lays",
    qty: 10,
    price: 20,
    imgUrl:
      "https://www.bigbasket.com/media/uploads/p/xxl/40202279_6-lays-potato-chips-classic-salted-best-quality-crunchy.jpg",
  },
  {
    id: 9,
    name: "lays",
    qty: 10,
    price: 20,
    imgUrl:
      "https://www.bigbasket.com/media/uploads/p/xxl/40202279_6-lays-potato-chips-classic-salted-best-quality-crunchy.jpg",
  },
  {
    id: 10,
    name: "lays",
    qty: 10,
    price: 20,
    imgUrl:
      "https://www.bigbasket.com/media/uploads/p/xxl/40202279_6-lays-potato-chips-classic-salted-best-quality-crunchy.jpg",
  },
];

const ItemsList = () => {
  const [editItemData, setEditItemData] = React.useState();
  const [showAddItemModal, setShowAddItemModal] = React.useState(false);
  const [showEditItemModal, setShowEditItemModal] = React.useState(false);
  React.useEffect(() => {
    console.log(editItemData);
  }, [editItemData]);
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
