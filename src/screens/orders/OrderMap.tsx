import { BackButton, Map, OrderCard } from "@/components";
import { useLocation } from "@/hooks";
import { OrderModel } from "@/models";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export function OrderMapScreen() {
  const { navigate } = useNavigation();
  const { params: order } = useRoute() as { params: OrderModel };
  const { location, requestLocationPermissions } = useLocation();

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  return (
    <View style={styles.content}>
      <BackButton style={styles.backButton} />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigate("OrderDetails", order);
        }}
        style={styles.detailsCard}
      >
        <OrderCard order={order} style={{ width: "100%" }} />
      </TouchableOpacity>
      <Map
        origin={
          location
            ? {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
              }
            : undefined
        }
        destination={{
          lat: -23.560374596692007,
          lng: -46.65802922459958,
        }}
        restaurant={{
          name: order.restaurant.name,
          image_url: order.restaurant.image_url,
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
