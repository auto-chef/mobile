import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toaster, { BaseToast } from "react-native-toast-message";

import { Header } from "@/components";
import { baseToastStyles } from "@/helpers";
import { AuthProvider } from "@/providers";
import { StackNavigator } from "@/screens";
import { theme } from "@/styles";

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    text_regular: Poppins_400Regular,
    text_medium: Poppins_500Medium,
    text_bold: Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      <StatusBar translucent backgroundColor={theme.zinc[950]} />
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            background: theme.zinc[950],
            border: theme.zinc[900],
            card: theme.zinc[900],
            notification: theme.zinc[900],
            primary: theme.primary[500],
            text: theme.zinc[100],
          },
        }}
      >
        <AuthProvider>
          <Header />
          <StackNavigator />
        </AuthProvider>
      </NavigationContainer>
      <Toaster
        position="top"
        config={{
          success: (props) => (
            <BaseToast
              {...props}
              {...baseToastStyles}
              style={{ borderColor: theme.green[500] }}
            />
          ),
          error: (props) => (
            <BaseToast
              {...props}
              {...baseToastStyles}
              style={{ borderColor: theme.red[500] }}
            />
          ),
          info: (props) => (
            <BaseToast
              {...props}
              {...baseToastStyles}
              style={{ borderColor: theme.primary[500] }}
            />
          ),
        }}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,

    backgroundColor: theme.zinc[950],
  },
});
