import { StatusBar, StyleSheet, View } from "react-native";

import { WelcomeScreen } from "@/screens";
import { theme } from "@/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
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
