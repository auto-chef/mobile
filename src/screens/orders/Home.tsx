import { StyleSheet, View } from "react-native";

import { EmptyOrderList } from "./components";

export function HomeScreen() {
  return (
    <View style={styles.content}>
      <EmptyOrderList />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,

    padding: 24,
  },
});
