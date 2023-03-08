import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import TextBox from "../../components/shared/TextBox";

const data = [
  {
    id: 1,
    name: "Devesh Meena",
    hostel: "MBH-A",
    room_no: 507,
    total: 1,
    cart: [
      { id: 1, name: "lays", price: 20, qty: 2 },
      { id: 2, name: "kurkure", price: 20, qty: 2 },
      { id: 3, name: "uncle chips", price: 20, qty: 2 },
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
      { id: 2, name: "kurkure", price: 20, qty: 2 },
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

const Analytics = () => {
  const [filter, setFilter] = React.useState("ALL");
  const [analytics, setAnalytics] = React.useState();

  const calculateAnalytics = (data) => {
    let analytics = { ALL: {}, "MBH-A": {}, "MBH-B": {}, "MBH-F": {} };

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].cart.length; j++) {
        if (data[i].cart[j].name in analytics["ALL"]) {
          analytics["ALL"][data[i].cart[j].name]++;
        } else {
          analytics["ALL"][data[i].cart[j].name] = 1;
        }
        if (data[i].cart[j].name in analytics[data[i].hostel]) {
          analytics[data[i].hostel][data[i].cart[j].name]++;
        } else {
          analytics[data[i].hostel][data[i].cart[j].name] = 1;
        }
      }
    }

    return analytics;
  };
  React.useEffect(() => {
    setAnalytics(calculateAnalytics(data));
  }, [data]);
  return (
    <View className="flex-1 items-center justify-start bg-primary-2">
      <View className="w-full items-center pt-3 mb-3">
        <TextBox class="text-secondary-1 text-3xl" italic>
          Analytics
        </TextBox>
      </View>
      <View className="flex-row py-2 items-center justify-evenly w-[95vw] bg-[#c2ffe2] rounded-full">
        <TouchableOpacity
          className="w-20 h-8 items-center justify-center rounded-full bg-primary-1"
          onPress={() => {
            setFilter("ALL");
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
      <View className="mt-5 w-[90vw] border border-secondary-1 rounded-3xl p-5">
        <View className="items-center justify-between px-2 w-full flex-row mb-4">
          <TextBox class="font-bold text-lg">Name </TextBox>
          <TextBox class="font-bold text-lg">Quantity</TextBox>
        </View>
        {analytics &&
          Object.keys(analytics[filter]).map((k, v) => (
            <View className="items-center justify-between px-2 w-full flex-row">
              <TextBox class="text-lg">{k}</TextBox>
              <TextBox class="text-lg">{analytics[filter][k]}</TextBox>
            </View>
          ))}
      </View>
    </View>
  );
};

export default Analytics;
