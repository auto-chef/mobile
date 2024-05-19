import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { OrderCard, OrderCardSkeleton, StatusCircle } from "@/components";
import { statusData, toast } from "@/helpers";
import { OrderModel, OrderStatus } from "@/models";
import { theme } from "@/styles";
import { useNavigation } from "@react-navigation/native";
import { getOrdersRequest } from "../requests";

interface OrderSectionProps {
  status: OrderStatus;
}

export function OrderSection({ status }: OrderSectionProps) {
  const { navigate } = useNavigation();

  const [orderList, setOrderList] = useState<OrderModel[]>([]);

  useEffect(() => {
    async function loadOrders() {
      try {
        const { data } = await getOrdersRequest(status);

        setOrderList(data);
      } catch (error) {
        toast({
          type: "error",
          text1: "Não foi possível carregar os restaurantes.",
        });
      }
    }

    loadOrders();
  }, []);

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
        ListEmptyComponent={() => (
          <View style={{ flexDirection: "row", gap: 16 }}>
            <OrderCardSkeleton />
            <OrderCardSkeleton />
            <OrderCardSkeleton />
          </View>
        )}
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
