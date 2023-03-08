import { View, FlatList } from "react-native";

import React from "react";
import TextBox from "../../components/shared/TextBox";
import ListItem from "../../components/food-service/ListItem";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import OrderModal from "../../components/food-service/orderModal";
import { Alert } from "react-native";
import { BackHandler } from "react-native";

const data = [
  {
    id: 1,
    name: "Devesh Meena",
    hostel: "MBH-A",
    room_no: 507,
    total: 1,
    cart: [
      { id: 1, name: "lays", price: 20, qty: 2 },
      { id: 2, name: "lays", price: 20, qty: 2 },
      { id: 3, name: "lays", price: 20, qty: 2 },
    ],
  },
  {
    id: 2,
    name: "Devesh Meena",
    hostel: "MBH-B",
    room_no: 507,
    total: 232,
    cart: [
      { id: 1, name: "lays", price: 20, qty: 2 },
      { id: 2, name: "lays", price: 20, qty: 2 },
      { id: 3, name: "lays", price: 20, qty: 2 },
    ],
  },
  {
    id: 3,
    name: "Devesh Meena",
    hostel: "MBH-F",
    room_no: 507,
    total: 3,
    cart: [
      { id: 1, name: "lays", price: 20, qty: 2 },
      { id: 2, name: "lays", price: 20, qty: 2 },
      { id: 3, name: "lays", price: 20, qty: 2 },
    ],
  },
  {
    id: 4,
    name: "Devesh Meena",
    hostel: "MBH-A",
    room_no: 507,
    total: 4,
    cart: [
      { id: 1, name: "lays", price: 20, qty: 2 },
      { id: 2, name: "lays", price: 20, qty: 2 },
      { id: 3, name: "lays", price: 20, qty: 2 },
    ],
  },
  {
    id: 5,
    name: "Devesh Meena",
    hostel: "MBH-B",
    room_no: 507,
    total: 5,
    cart: [
      { id: 1, name: "lays", price: 20, qty: 2 },
      { id: 2, name: "lays", price: 20, qty: 2 },
      { id: 3, name: "lays", price: 20, qty: 2 },
    ],
  },
  {
    id: 6,
    name: "Devesh Meena",
    hostel: "MBH-F",
    room_no: 507,
    total: 6,
    cart: [
      { id: 1, name: "lays", price: 20, qty: 2 },
      { id: 2, name: "lays", price: 20, qty: 2 },
      { id: 3, name: "lays", price: 20, qty: 2 },
    ],
  },
  {
    id: 7,
    name: "Devesh Meena",
    hostel: "MBH-A",
    room_no: 507,
    total: 7,
    cart: [
      { id: 1, name: "lays", price: 20, qty: 2 },
      { id: 2, name: "lays", price: 20, qty: 2 },
      { id: 3, name: "lays", price: 20, qty: 2 },
    ],
  },
  {
    id: 8,
    name: "Devesh Meena",
    hostel: "MBH-B",
    room_no: 507,
    total: 8,
    cart: [
      { id: 1, name: "lays", price: 20, qty: 2 },
      { id: 2, name: "lays", price: 20, qty: 2 },
      { id: 3, name: "lays", price: 20, qty: 2 },
    ],
  },
  {
    id: 9,
    name: "Devesh Meena",
    hostel: "MBH-F",
    room_no: 507,
    total: 9,
    cart: [
      { id: 1, name: "lays", price: 20, qty: 2 },
      { id: 2, name: "lays", price: 20, qty: 2 },
      { id: 3, name: "lays", price: 20, qty: 2 },
    ],
  },
  {
    id: 10,
    name: "Devesh Meena",
    hostel: "MBH-B",
    room_no: 507,
    total: 10,
    cart: [
      { id: 1, name: "lays", price: 20, qty: 2 },
      { id: 2, name: "lays", price: 20, qty: 2 },
      { id: 3, name: "lays", price: 20, qty: 2 },
    ],
  },
];

const HomeFS = ({ navigation }) => {
  React.useEffect(() => {
    const backAction = () => {
      Alert.alert("Exit", "Are you sure you want to go exit?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [filter, setFilter] = React.useState("All");

  const [Data, setData] = React.useState(data);
  React.useEffect(() => {
    console.log({ Data, selectedItem });
  }, [Data, selectedItem]);
  return (
    <View className="flex-1 items-center justify-start bg-primary-2">
      <View className="w-full items-center pt-3 mb-3">
        <TextBox class="text-secondary-1 text-3xl" italic>
          Orders
        </TextBox>
      </View>
      <View className="flex-row py-2 items-center justify-evenly w-[95vw] bg-[#c2ffe2] rounded-full mb-3">
        <TouchableOpacity
          className="w-20 h-8 items-center justify-center rounded-full bg-primary-1"
          onPress={() => {
            setFilter("All");
          }}
        >
          <TextBox class="text-white">All</TextBox>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-20 h-8 items-center justify-center rounded-full bg-primary-1"
          onPress={() => {
            setFilter("MBH-A");
          }}
        >
          <TextBox class="text-white">A</TextBox>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-20 h-8 items-center justify-center rounded-full bg-primary-1"
          onPress={() => {
            setFilter("MBH-B");
          }}
        >
          <TextBox class="text-white">B</TextBox>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-20 h-8 items-center justify-center rounded-full bg-primary-1"
          onPress={() => {
            setFilter("MBH-F");
          }}
        >
          <TextBox class="text-white">F</TextBox>
        </TouchableOpacity>
      </View>
      {Data.length ? (
        <>
          <FlatList
            className="w-full h-full bg-primary-2 pb-96"
            data={
              filter !== "All" ? Data.filter((x) => x.hostel == filter) : Data
            }
            renderItem={({ item, index }) => (
              <ListItem
                index={index}
                setState={setData}
                user={item}
                setSelectedItem={setSelectedItem}
                setShowModal={setShowModal}
              />
            )}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        </>
      ) : (
        <LinearGradient
          colors={["#414141", "#383838"]}
          className="w-[80vw] h-[10vh] mt-10 rounded-3xl items-center justify-center "
        >
          <TextBox class="text-white">Queue is Empty</TextBox>
        </LinearGradient>
      )}
      {selectedItem && (
        <OrderModal
          isOpen={showModal}
          onClose={setShowModal}
          item={selectedItem}
        />
      )}
    </View>
  );
};

export default HomeFS;
