import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { OrderCard, StatusCircle } from "@/components";
import { statusData } from "@/helpers";
import { OrderModel, OrderStatus } from "@/models";
import { theme } from "@/styles";

interface OrderSectionProps {
  status: OrderStatus;
}

export function OrderSection({ status }: OrderSectionProps) {
  const [orderList, setOrderList] = useState<OrderModel[]>(
    Array.from({ length: 5 }, (_, index) => ({
      id: "2452" + index,
      restaurant: {
        name: "Divino Fogão Shopping Cidade São Paulo",
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJ_cPwc-c4UJfLzTi1SaHWq_4zwDdEkGyZ2zmzdcCDw&s",
        background_url:
          "https://img.cybercook.com.br/imagens/receitas/340/file-de-frango-grelhado-2.jpeg",
      },
      price: 54.9,
      items: [
        {
          name: "Frango ao molho",
          amount: 1,
          extras: [{ amount: 1, name: "Tomate" }],
        },
        { name: "Prato Kids Parmegiana", amount: 2 },
      ],
      status,
    }))
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
        renderItem={({ item }) => <OrderCard key={item.id} order={item} />}
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
