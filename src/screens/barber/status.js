import {
  View,
  Text,
  ToastAndroid,
  Pressable,
  ActivityIndicator,
  ActivityIndicatorBase,
} from "react-native";
import React from "react";
import TextBox from "../../components/shared/TextBox";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../../../lib/context/authContext";
import { LinearGradient } from "expo-linear-gradient";
import auth from "@react-native-firebase/auth";
import {
  getServiceStatus,
  updateServiceStatus,
} from "../../../lib/firebase/user";
const Status = ({ navigation }) => {
  const [disabled, setDisabled] = React.useState(false);
  const { state, dispatch } = React.useContext(AuthContext);
  const [barberStatus, setBarberStatus] = React.useState("CLOSED");

  React.useEffect(() => {
    const handlefetchBarberStatus = async () => {
      try {
        const { status } = await getServiceStatus(state.uid);
        setBarberStatus(status);
      } catch (error) {
        console.log(error);
      }
    };

    handlefetchBarberStatus();
  }, []);

  React.useEffect(() => {
    console.log(barberStatus);
  }, [barberStatus]);

  return (
    <View className="flex-1 w-full items-center justify-start bg-primary-2">
      <View className="w-full mt-3 flex-row items-center justify-around border-b border-b-primary-1 pb-2">
        <TextBox class="text-secondary-1 text-3xl" italic>
          Status
        </TextBox>
      </View>
      <View className="mt-5">
        <View className=" border border-slate-300 w-[80vw] rounded-3xl items-center justify-between mb-5 px-10 py-10">
          <Pressable
            className="w-full"
            onPress={async () => {
              try {
                setDisabled("OPEN");
                await updateServiceStatus(state.uid, "OPEN");
                setBarberStatus("OPEN");
              } catch (error) {
                console.log(error);
              } finally {
                setDisabled(false);
              }
            }}
          >
            <LinearGradient
              colors={
                barberStatus !== "OPEN"
                  ? ["#A7A7AD", "#414141"]
                  : ["#6ECBFF", "#559AFF"]
              }
              className="bg-primary-1
          py-3 px-5 rounded-2xl items-center justify-center w-full"
            >
              {disabled == "OPEN" ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <TextBox class="text-lg text-white">Open</TextBox>
              )}
            </LinearGradient>
          </Pressable>
          <Pressable
            className="w-full"
            onPress={async () => {
              try {
                setDisabled("BREAK");
                await updateServiceStatus(state.uid, "BREAK");
                setBarberStatus("BREAK");
              } catch (error) {
                console.log(error);
              } finally {
                setDisabled(false);
              }
            }}
          >
            <LinearGradient
              colors={
                barberStatus !== "BREAK"
                  ? ["#A7A7AD", "#414141"]
                  : ["#6ECBFF", "#559AFF"]
              }
              className="bg-primary-1
          py-3 px-5 rounded-2xl items-center justify-center w-full mt-3"
            >
              {disabled == "BREAK" ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <TextBox class="text-lg text-white">Break</TextBox>
              )}
            </LinearGradient>
          </Pressable>
          <Pressable
            className="w-full"
            onPress={async () => {
              try {
                setDisabled("CLOSED");
                await updateServiceStatus(state.uid, "CLOSED");
                setBarberStatus("CLOSED");
              } catch (error) {
                console.log(error);
              } finally {
                setDisabled(false);
              }
            }}
          >
            <LinearGradient
              colors={
                barberStatus !== "CLOSED"
                  ? ["#A7A7AD", "#414141"]
                  : ["#6ECBFF", "#559AFF"]
              }
              className="bg-primary-1
          py-3 px-5 rounded-2xl items-center justify-center w-full mt-3"
            >
              {disabled == "CLOSED" ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <TextBox class="text-lg text-white">Closed</TextBox>
              )}
            </LinearGradient>
          </Pressable>
        </View>
        <TouchableOpacity
          className="rounded-3xl"
          onPress={async () => {
            try {
              setDisabled("LOGOUT");
              await auth().signOut();
              ToastAndroid.showWithGravityAndOffset(
                "Successfully logged out",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                50
              );
              dispatch({ type: "SIGN_OUT" });
            } catch (error) {
              ToastAndroid.showWithGravityAndOffset(
                "Couldn't log out",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                50
              );
              console.log(error);
            } finally {
              setDisabled(false);
            }
          }}
        >
          <LinearGradient
            colors={["#414141", "#383838"]}
            className="bg-primary-1
          py-3 px-5 rounded-3xl items-center justify-center w-[80vw] h-[10vh] mt-16"
          >
            {disabled == "LOGOUT" ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <TextBox class="text-white text-lg">Logout</TextBox>
            )}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;
