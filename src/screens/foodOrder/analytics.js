import { View, TouchableOpacity } from "react-native";
import React from "react";
import TextBox from "../../components/shared/TextBox";
import { getTodayOrders } from "../../../lib/firebase/snackmen";

const Analytics = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getTodayOrders(setData);
  }, []);

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
            <View
              className="items-center justify-between px-2 w-full flex-row"
              key={v}
            >
              <TextBox class="text-lg">{k}</TextBox>
              <TextBox class="text-lg">{analytics[filter][k]}</TextBox>
            </View>
          ))}
      </View>
    </View>
  );
};

export default Analytics;
