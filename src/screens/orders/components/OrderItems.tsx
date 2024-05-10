import { OrderModel } from "@/models";
import { fontFamily, theme } from "@/styles";
import { StyleSheet, Text, View } from "react-native";

interface OrderItemsProps {
  items: OrderModel["items"];
}

export function OrderItems({ items }: OrderItemsProps) {
  return (
    <View>
      <View style={styles.tableHeader}>
        <Text style={[styles.productCol, styles.headerText]}>Produto</Text>
        <Text style={[styles.headerText, styles.amountCol]}>Qtd.</Text>
        <Text style={[styles.headerText, styles.priceCol]}>Preço</Text>
        <Text style={[styles.headerText, styles.priceCol]}>Subtotal</Text>
      </View>
      {items.map((item) => (
        <View style={styles.tr}>
          <View style={[styles.productCol]}>
            <Text>
              {item.amount}x {item.name}
            </Text>
            {item.extras.map((extra) => (
              <View style={styles.extrasContainer}>
                <Text style={styles.extra}>
                  • {extra.amount}x {extra.name}
                </Text>
              </View>
            ))}
          </View>
          <Text style={styles.amountCol}>3</Text>
          <Text style={styles.priceCol}>
            R$ {item.price.toFixed(2).replace(".", ",")}
          </Text>
          <Text style={styles.priceCol}>
            R$ {(item.price * item.amount).toFixed(2).replace(".", ",")}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 24,
    height: 48,

    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: theme.zinc[800],
    borderTopColor: theme.zinc[600],
  },
  headerText: {
    color: theme.zinc[400],
  },
  productCol: {
    flex: 1,
  },
  amountCol: {
    width: 36,
  },
  priceCol: {
    width: 64,
  },
  tr: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 16,
    paddingHorizontal: 24,

    borderBottomWidth: 1,
    borderBottomColor: theme.zinc[800],

    fontFamily: fontFamily.regular,
  },
  extrasContainer: {
    gap: 4,

    paddingLeft: 16,
    marginTop: 8,
  },
  extra: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: theme.zinc[400],
    textDecorationLine: "line-through",
  },
});
