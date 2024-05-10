import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { OrderCard, StatusCircle } from "@/components";
import { statusData } from "@/helpers";
import { products, restaurants } from "@/mocks";
import { OrderModel, OrderStatus } from "@/models";
import { theme } from "@/styles";
import { useNavigation } from "@react-navigation/native";

interface OrderSectionProps {
  status: OrderStatus;
}

export function OrderSection({ status }: OrderSectionProps) {
  const { navigate } = useNavigation();

  const [orderList, setOrderList] = useState<OrderModel[]>(
    Array.from(
      { length: status === "ACCEPTED" ? 1 : Math.floor(Math.random() * 5) + 2 },
      (_, index) => ({
        id: Math.floor(Math.random() * 100000).toString(),
        restaurant: restaurants[Math.floor(Math.random() * restaurants.length)],
        price: Math.floor(Math.random() * 100) + 10,
        items: Array.from(
          { length: Math.floor(Math.random() * 2) + 1 },
          () => products[Math.floor(Math.random() * products.length)],
        ),
        status,
      })
    )
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <StatusCircle status={status} />
        <Text style={styles.title}>{statusData[status].name}</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={orderList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigate(
                status === "ACCEPTED" ? "OrderMap" : "OrderDetails",
                item
              )
            }
            key={`${status}-${item.id}`}
          >
            <OrderCard order={item} />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        contentContainerStyle={{ paddingHorizontal: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  statusCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 24,
  },
  title: {
    display: "flex",
    color: theme.zinc[300],

    fontSize: 16,
    fontWeight: "500",
  },
});
