import React from "react";
import NetInfo from "@react-native-community/netinfo";
import StackNavigator from "./navigation/StackNavigator";

import ErrorModal from "./components/shared/ErrorModal";
import { View } from "react-native";

const Main = () => {
  const [showModal, setShowModal] = React.useState(false);
  React.useEffect(() => {
    NetInfo.addEventListener((state) => {
      setShowModal(!state.isConnected);
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
