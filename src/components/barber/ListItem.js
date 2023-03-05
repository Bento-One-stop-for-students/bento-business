import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import TextBox from "../shared/TextBox";
import { LinearGradient } from "expo-linear-gradient";
import { Swipeable } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

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

const ListItem = ({ index, user, setState }) => {
  const [done, setDone] = React.useState(false);
  const [ref, setRef] = React.useState("");
  const height = new Animated.Value(70);

  const animatedDelete = () => {
    if (done) {
      Animated.timing(height, {
        toValue: 0,
        duration: 350,
        useNativeDriver: false,
      }).start(() =>
        setState((prevState) => prevState.filter((e) => e.id !== user.id))
      );
    } else {
        ref.close();
    }
  };

  return (
    <Swipeable
      renderRightActions={swipeRight}
      rightThreshold={300}
      onSwipeableOpen={animatedDelete}
      key={user.id}
      ref={(ref) => {
        setRef(ref);
      }}
    >
      <Animated.View>
        <LinearGradient
          colors={["#FFFFFF", "#FBFBFB"]}
          className="w-full py-4 items-center justify-between bg-primary-2 flex-row"
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        >
          <View className="ml-6">
            <TextBox class="text-lg text-primary-1">{user.name}</TextBox>
            <TextBox class="text-lg text-[#47b17e]">{user.services}</TextBox>
          </View>
          <View className="border-2 rounded-full w-16 items-center justify-center border-primary-1 bg-primary-1 mr-6">
            <TextBox class="text-xl text-primary-2">{user.token}</TextBox>
          </View>
        </LinearGradient>
      </Animated.View>
    </Swipeable>
  );
};

export default ListItem;
