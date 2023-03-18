import { View, FlatList } from "react-native";

import React from "react";
import TextBox from "../../components/shared/TextBox";
import ListItem from "../../components/food-service/ListItem";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import OrderModal from "../../components/food-service/orderModal";
import { getTodayOrders } from "../../../lib/firebase/snackmen";

const HomeFS = ({ navigation }) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getTodayOrders(setData);
  }, []);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [filter, setFilter] = React.useState("All");
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
      {data.length ? (
        <>
          <FlatList
            className="w-full h-full bg-primary-2 pb-96"
            data={
              filter !== "All" ? data.filter((x) => x.hostel == filter) : data
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
