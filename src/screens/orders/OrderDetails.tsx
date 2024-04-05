import { BackButton, Map, OrderCard } from "@/components";
import { OrderModel } from "@/models";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

export function OrderDetailsScreen() {
  const { params: order } = useRoute() as { params: OrderModel };

  return (
    <View style={styles.content}>
      <BackButton style={styles.backButton} />
      <View style={styles.detailsCard}>
        <OrderCard order={order} style={{ width: "100%" }} />
      </View>
      <Map
        origin={{
          lat: -23.55318,
          lng: -46.689357,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  backButton: {
    position: "absolute",

    left: 24,
    top: 24,
    zIndex: 50,
  },
  detailsCard: {
    position: "absolute",
    bottom: 0,
    left: 0,

    width: "100%",
    padding: 24,
    zIndex: 50,
  },
});
