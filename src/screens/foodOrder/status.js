import { View, Text } from "react-native";
import React from "react";
import TextBox from "../../components/shared/TextBox";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../../../lib/context/authContext";
import { LinearGradient } from "expo-linear-gradient";

const Status = () => {
  const { state, dispatch } = React.useContext(AuthContext);

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const updateServiceStatus = async () => {
      try {
        await setDoc(
          doc(db, "status", state.uid),
          {
            status: `${isOpen ? "OPEN" : "CLOSED"}`,
          },
          { merge: true }
        );
      } catch (err) {
        console.log(err);
      }
    };
    updateServiceStatus();
  }, [isOpen]);
  return (
    <View className="flex-1 w-full items-center justify-start bg-primary-2">
      <View className="w-full mt-3 flex-row items-center justify-around border-b border-b-primary-1 pb-2">
        <TextBox class="text-secondary-1 text-3xl" italic>
          Status
        </TextBox>
      </View>
      <View className="mt-5">
        <View className="flex-row border border-slate-300 w-[80vw] h-[10vh] rounded-3xl items-center justify-between mb-5">
          <TextBox class="text-lg text-secondary-1 ml-5">Shop Status</TextBox>
          <TouchableOpacity
            className={`${
              isOpen ? "bg-emerald-500" : "bg-primary-1"
            } py-3 px-5 rounded-full mr-5`}
            onPress={() => {
              setIsOpen(!isOpen);
            }}
          >
            <TextBox class="text-white">{isOpen ? "Open" : "Closed"}</TextBox>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="rounded-3xl"
          onPress={() => {
            dispatch({ type: "SIGN_OUT" });
          }}
        >
          <LinearGradient
            colors={["#414141", "#383838"]}
            className="bg-primary-1
          py-3 px-5 rounded-3xl items-center justify-center w-[80vw] h-[10vh] mt-16"
          >
            <TextBox class="text-white text-lg">Logout</TextBox>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;
