import React from "react";

import auth from "@react-native-firebase/auth";
import { ToastAndroid, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import NetInfo from "@react-native-community/netinfo";

import ErrorModal from "./components/shared/ErrorModal";
import StackNavigator from "./navigation/StackNavigator";
import { AuthContext } from "../lib/context/authContext";
import { getServiceStatus } from "../lib/firebase/user";

SplashScreen.preventAutoHideAsync();

const Main = ({ setAppIsReady }) => {
  const [showModal, setShowModal] = React.useState(false);
  const { dispatch } = React.useContext(AuthContext);
  React.useEffect(() => {
    NetInfo.addEventListener((state) => {
      setShowModal(!state.isConnected);
    });

    // check if already signed in
    auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const { profession } = await getServiceStatus(user.uid);
          dispatch({
            type: "SIGN_IN",
            payload: {
              profession,
              uid: user.uid,
            },
          });
        } catch (error) {
          console.log(error);
        } finally {
          setAppIsReady(true);
        }
      }
    });
  }, []);
  return (
    <View className="flex-1">
      <StackNavigator />
      <ErrorModal
        title="Network Error"
        error="No internet connection. Try again later"
        isOpen={showModal}
        onClose={setShowModal}
      />
    </View>
  );
};

export default Main;
