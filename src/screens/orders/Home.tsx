import { ScrollView, StyleSheet, View } from "react-native";

import { ChefIAButton } from "@/components";
import { OrderSection, RestaurantsList } from "./components";

export function HomeScreen() {
  return (
    <View style={styles.content}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={{
          rowGap: 24,
          paddingVertical: 24,
        }}
      >
        <RestaurantsList />
        <OrderSection status="PENDING" />
        <OrderSection status="ACCEPTED" />
        <OrderSection status="DELIVERED" />
        <OrderSection status="REJECTED" />
      </ScrollView>
      <ChefIAButton />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
