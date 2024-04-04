import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { StatusBar, StyleSheet, View } from "react-native";

import { HomeScreen } from "@/screens";
import { theme } from "@/styles";

export default function App() {
  let [fontsLoaded] = useFonts({
    text_regular: Poppins_400Regular,
    text_medium: Poppins_500Medium,
    text_bold: Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,

    backgroundColor: theme.zinc[950],
  },
});
