import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import TextBox from "../../components/shared/TextBox";

const Home = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-between">
      <StatusBar animated={true} backgroundColor="#414141" style="light" />
      <LinearGradient
        // Background Linear Gradient
        colors={["#414141", "#232023"]}
        className="absolute top-0 left-0 right-0 h-full"
      />
      <Image
        className="w-[70vw] h-[60vw] mt-10"
        source={require("../../../assets/bento-logo.png")}
      />
      <TextBox italic class="text-white text-[30px]">
        I'm a
      </TextBox>
      <View className="bg-[#FBFBFB] w-full h-[50vh] rounded-t-[70] items-center justify-center flex-col">
        <LinearGradient
          colors={["#6ECBFF", "#559AFF"]}
          className="absolute top-0 left-0 right-0 h-full rounded-t-[40]"
        />
        <View className="gap-5">
          <TouchableHighlight
            className="rounded-3xl "
            onPress={() => {
              navigation.navigate("sign-in", { profession: "barber" });
            }}
            style={{ elevation: 3 }}
          >
            <LinearGradient
              colors={["#414141", "#232023"]}
              className="w-[70vw] h-[8vh] rounded-3xl items-center justify-center"
            >
              <View className="flex-row items-center justify-center">
                <Fontisto name="scissors" size={20} color="white" />
                <TextBox class="text-lg text-white ml-3">Barber</TextBox>
              </View>
            </LinearGradient>
          </TouchableHighlight>
          <TouchableHighlight
            className="rounded-3xl "
            onPress={() => {
              navigation.navigate("sign-in", { profession: "snackmen" });
            }}
            style={{ elevation: 3 }}
          >
            <LinearGradient
              colors={["#414141", "#232023"]}
              className="w-[70vw] h-[8vh] rounded-3xl items-center justify-center"
            >
              <View className="flex-row items-center justify-center">
                <Ionicons name="fast-food-outline" size={24} color="white" />
                <TextBox class="text-lg text-white ml-3">Snackmen</TextBox>
              </View>
            </LinearGradient>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Home;
