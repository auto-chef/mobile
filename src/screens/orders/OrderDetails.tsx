import { BackButton } from "@/components";
import { OrderModel } from "@/models";
import { fontFamily, theme } from "@/styles";
import { useRoute } from "@react-navigation/native";
import { MapPinIcon } from "lucide-react-native";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { OrderItems, OrderTable } from "./components";

export function OrderDetailsScreen() {
  const { params: order } = useRoute() as { params: OrderModel };

  return (
    <ScrollView>
      <ImageBackground
        style={styles.restaurantContainer}
        source={{ uri: order.restaurant.background_url }}
        imageStyle={{ opacity: 0.2 }}
      >
        <BackButton />
        <View style={styles.headerContent}>
          <View style={styles.orderName}>
            <Image
              style={styles.restaurantLogo}
              source={{ uri: order.restaurant.image_url }}
            />
            <Text style={styles.title} numberOfLines={1}>
              Pedido #{order.id}
            </Text>
          </View>
          <Text style={styles.restaurantName} numberOfLines={1}>
            <MapPinIcon color={theme.zinc[300]} size={14} />{" "}
            {order.restaurant.name}
          </Text>
        </View>
      </ImageBackground>
      <View>
        <OrderTable />
        <OrderItems />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  restaurantContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,

    paddingVertical: 24,
    paddingHorizontal: 16,
    borderBottomWidth: 1.5,

    borderColor: theme.zinc[600],
  },
  headerContent: {
    gap: 4,
  },
  title: {
    color: theme.zinc[50],

    fontFamily: fontFamily.medium,
    fontSize: 24,
  },
  orderName: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  restaurantLogo: {
    width: 24,
    height: 24,
    borderRadius: 4,
  },
  restaurantName: {
    alignItems: "center",

    color: theme.zinc[300],

    fontFamily: fontFamily.regular,
    fontSize: 14,
  },
});
