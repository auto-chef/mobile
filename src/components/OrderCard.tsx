import { MapPinIcon } from "lucide-react-native";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { OrderModel } from "@/models";
import { fontFamily, theme } from "@/styles";
import { StatusCircle } from "./StatusCircle";

interface OrderCardProps {
  order: OrderModel;
  showStatus?: boolean;
}

export function OrderCard({ order, showStatus }: OrderCardProps) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.restaurantContainer}
        source={{ uri: order.restaurant.background_url }}
        imageStyle={{ opacity: 0.2 }}
      >
        {showStatus ? (
          <StatusCircle
            status={order.status}
            style={{
              position: "absolute",
              right: 12,
              top: 12,
            }}
          />
        ) : null}
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
      </ImageBackground>
      <ScrollView style={styles.itemsContainer}>
        <Text style={styles.price}>R$ {order.price}</Text>
        <View>
          {order.items.map(({ name, amount, extras }) => (
            <View>
              <Text style={styles.text} key={`item-${amount}-${name}`}>
                • {amount}x {name}
              </Text>
              {extras?.map(({ name, amount }) => (
                <Text style={styles.extras} key={`extra-${name}-${amount}`}>
                  • {amount}x {name}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    width: 256,

    backgroundColor: theme.zinc[950],
    borderColor: theme.zinc[800],
  },
  restaurantContainer: {
    padding: 16,
    borderBottomWidth: 1,

    borderColor: theme.zinc[800],
  },
  itemsContainer: {
    gap: 8,
    height: 156,
    padding: 16,
  },
  price: {
    color: theme.zinc[50],

    fontSize: 20,
    fontFamily: fontFamily.bold,
  },
  title: {
    color: theme.zinc[50],

    fontFamily: fontFamily.medium,
    fontSize: 24,
  },
  text: {
    color: theme.zinc[50],
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
  extras: {
    marginLeft: 12,

    color: theme.zinc[400],

    fontSize: 12,
    fontFamily: fontFamily.regular,
    textDecorationLine: "line-through",
  },
});
