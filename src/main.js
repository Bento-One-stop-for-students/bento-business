import React from "react";
import NetInfo from "@react-native-community/netinfo";
import StackNavigator, { AuthNavigator } from "./navigation/StackNavigator";

import ErrorModal from "./components/shared/ErrorModal";
import { AuthContext } from "../lib/context/authContext";

const Main = () => {
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
