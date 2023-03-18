import React from "react";
import { View, StyleSheet, Animated, Pressable } from "react-native";
import TextBox from "../shared/TextBox";
import { LinearGradient } from "expo-linear-gradient";
import { Swipeable } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import OrderModal from "./orderModal";
import { setDeliveredOrder } from "../../../lib/firebase/snackmen";

const swipeRight = (progress, dragX) => {
  return (
    <Animated.View
      style={{
        backgroundColor: "#47b17e",
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 50,
      }}
    >
      <Animated.Text
        style={{
          marginLeft: "auto",
          fontSize: 20,
          color: "white",
          marginRight: 10,
          fontFamily: "Lato_400Regular",
        }}
      >
        Done
      </Animated.Text>
      <Ionicons name="md-cloud-done-outline" size={30} color="white" />
    </Animated.View>
  );
};

const ListItem = ({ user, setSelectedItem, setShowModal }) => {
  const [ref, setRef] = React.useState("");
  const height = new Animated.Value(70);

  const animatedDelete = async () => {
    try {
      console.log({ id: user.userId, order: user.order_id });
      await setDeliveredOrder(user.userId, user.order_id);
      Animated.timing(height, {
        toValue: 0,
        duration: 350,
        useNativeDriver: false,
      }).start();
    } catch (err) {
      console.log(err);
      ref.close();
    }
  };

  return (
    <Swipeable
      friction={2}
      renderRightActions={swipeRight}
      rightThreshold={150}
      onSwipeableOpen={animatedDelete}
      key={user.userId}
      ref={(ref) => {
        setRef(ref);
      }}
    >
      <Animated.View>
        <Pressable
          onPress={() => {
            setSelectedItem(user);
            setShowModal(true);
          }}
        >
          <LinearGradient
            colors={["#FFFFFF", "#FBFBFB"]}
            className="w-full py-4 items-center justify-between bg-primary-2 flex-row"
            style={{
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          >
            <View className="ml-6">
              <TextBox class="text-lg text-primary-1">{user.name}</TextBox>
              <TextBox class="text-lg text-[#47b17e]">
                {user.hostel} {user.room_no}
              </TextBox>
            </View>
            <View className="border-2 rounded-full w-32 py-1 items-center justify-center border-primary-1 bg-primary-1 mr-6">
              <TextBox class="text-xl text-primary-2">Rs.{user.total}</TextBox>
            </View>
          </LinearGradient>
        </Pressable>
      </Animated.View>
    </Swipeable>
  );
};

export default ListItem;
