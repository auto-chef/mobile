import { StyleSheet, View } from "react-native";

import { Header } from "@/components";
import { EmptyOrderList } from "./components";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <EmptyOrderList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,

    padding: 24,
  },
});
