import { BackHandler, View, Text, FlatList } from "react-native";

import React from "react";
import TextBox from "../../components/shared/TextBox";
import ListItem from "../../components/barber/ListItem";
import { LinearGradient } from "expo-linear-gradient";
import { Alert } from "react-native";

const data = [
  {
    id: 1,
    name: "Devesh Meena",
    services: "Hair Beard Massage",
    token: 1,
  },
  {
    id: 2,
    name: "Devesh Meena",
    services: "Hair Beard Massage",
    token: 232,
  },
  {
    id: 3,
    name: "Devesh Meena",
    services: "Hair Beard Massage",
    token: 3,
  },
  {
    id: 4,
    name: "Devesh Meena",
    services: "Hair Beard Massage",
    token: 4,
  },
  {
    id: 5,
    name: "Devesh Meena",
    services: "Hair Beard Massage",
    token: 5,
  },
  {
    id: 6,
    name: "Devesh Meena",
    services: "Hair Beard Massage",
    token: 6,
  },
  {
    id: 7,
    name: "Devesh Meena",
    services: "Hair Beard Massage",
    token: 7,
  },
  {
    id: 8,
    name: "Devesh Meena",
    services: "Hair Beard Massage",
    token: 8,
  },
  {
    id: 9,
    name: "Devesh Meena",
    services: "Hair Beard Massage",
    token: 9,
  },
  {
    id: 10,
    name: "Devesh Meena",
    services: "Hair Beard Massage",
    token: 10,
  },
];

const HomeBarber = ({ navigation }) => {
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

  const [Data, setData] = React.useState(data);
  React.useEffect(() => {
    console.log(Data);
  }, [Data]);
  return (
    <View className="flex-1 items-center justify-start bg-primary-2">
      <View className="w-full mt-3 flex-row items-center justify-around border-b border-b-primary-1 pb-2 ">
        <TextBox class="text-secondary-1 text-3xl" italic>
          Orders
        </TextBox>
        <TextBox class="text-primary-1 text-lg">Total : {Data.length}</TextBox>
      </View>
      {Data.length ? (
        <FlatList
          className="w-full h-full bg-primary-2 pb-96"
          data={Data}
          renderItem={({ item, index }) => (
            <ListItem index={index} setState={setData} user={item} />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      ) : (
        <LinearGradient
          colors={["#414141", "#383838"]}
          className="w-[80vw] h-[10vh] mt-10 rounded-3xl items-center justify-center "
        >
          <TextBox class="text-white">Queue is Empty</TextBox>
        </LinearGradient>
      )}
    </View>
  );
};

export default HomeBarber;
