import { SafeAreaView, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthContext } from "../lib/context/context";
import StackNavigator, { AuthNavigator } from "./navigation/StackNavigator";
import ErrorModal from "./components/shared/ErrorModal";
import NetInfo from "@react-native-community/netinfo";

const Main = () => {
  const insets = useSafeAreaInsets();
  const { state } = React.useContext(AuthContext);
  const [showModal, setShowModal] = React.useState(false);
  React.useEffect(() => {
    NetInfo.addEventListener((state) => {
      setShowModal(!state.isConnected);
      console.log(state);
    });
  }, []);
  return (
    <>
        {state.isLoggedIn ? <StackNavigator /> : <AuthNavigator />}
        <ErrorModal
          title="Network Error"
          error="No internet connection. Try again later"
          isOpen={showModal}
        />
    </>
  );
};

export default Main;
