import { StatusBar, StyleSheet, View } from "react-native";

import { AutoChefLogoVertical } from "@/assets";

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <AutoChefLogoVertical />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    paddingBottom: StatusBar.currentHeight,
  },
});
