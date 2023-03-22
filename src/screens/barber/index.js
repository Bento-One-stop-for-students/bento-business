import { View, FlatList } from "react-native";

import React from "react";
import TextBox from "../../components/shared/TextBox";
import ListItem from "../../components/barber/ListItem";
import { LinearGradient } from "expo-linear-gradient";
import { getBarberBookingQueue } from "../../../lib/firebase/barber";

const HomeBarber = ({ navigation }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getBarberBookingQueue(setData);
  }, []);

  return (
    <View className="flex-1 items-center justify-start bg-primary-2">
      <View className="w-full mt-3 flex-row items-center justify-around border-b border-b-primary-1 pb-2 ">
        <TextBox class="text-secondary-1 text-3xl" italic>
          Bookings
        </TextBox>
        <TextBox class="text-primary-1 text-lg">
          Total : {data ? data.length : 0}
        </TextBox>
      </View>
      {data && data.length > 0 ? (
        <FlatList
          className="w-full h-full bg-primary-2 pb-96"
          data={data}
          renderItem={({ item, index }) => (
            <ListItem index={index} user={item} />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      ) : (
        <LinearGradient
          colors={["#414141", "#383838"]}
          className="w-[80vw] h-[10vh] mt-10 rounded-3xl items-center justify-center "
        >
          <TextBox class="text-white">Queue is Empty / Status is Off</TextBox>
        </LinearGradient>
      )}
    </View>
  );
};

export default HomeBarber;
