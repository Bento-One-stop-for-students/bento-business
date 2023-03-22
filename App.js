// very important - do not remove
import "react-native-gesture-handler";

import React from "react";

import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { Pattaya_400Regular } from "@expo-google-fonts/pattaya";
import {
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from "@expo-google-fonts/lato";

import Main from "./src/main";
import { AuthProvider } from "./lib/context/authContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);
  React.useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Lato_100Thin,
          Lato_100Thin_Italic,
          Lato_300Light,
          Lato_300Light_Italic,
          Lato_400Regular,
          Lato_400Regular_Italic,
          Lato_700Bold,
          Lato_700Bold_Italic,
          Lato_900Black,
          Lato_900Black_Italic,
          Pattaya_400Regular,
        });
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  const theme = {
    colors: {
      background: "#FBFBFB",
    },
  };
  return (
    <SafeAreaView className="flex-1">
      <NavigationContainer theme={theme}>
        <AuthProvider>
          <NativeBaseProvider>
            <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
              <StatusBar
                animated={true}
                backgroundColor="#FBFBFB"
                style="dark"
              />
              <Main setAppIsReady={setAppIsReady} />
            </View>
          </NativeBaseProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}
