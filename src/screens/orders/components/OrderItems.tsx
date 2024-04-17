import { fontFamily, theme } from "@/styles";
import { StyleSheet, Text, View } from "react-native";

export function OrderItems() {
  return (
    <View>
      <View style={styles.tableHeader}>
        <Text style={[styles.productCol, styles.headerText]}>Produto</Text>
        <Text style={[styles.headerText, styles.amountCol]}>Qtd.</Text>
        <Text style={[styles.headerText, styles.priceCol]}>Preço</Text>
        <Text style={[styles.headerText, styles.priceCol]}>Subtotal</Text>
      </View>
      <View style={styles.tr}>
        <View style={[styles.productCol]}>
          <Text>Big Mac</Text>
          <View style={styles.extrasContainer}>
            <Text style={styles.extra}>• 1x Picles</Text>
          </View>
        </View>
        <Text style={styles.amountCol}>3</Text>
        <Text style={styles.priceCol}>R$ 27,90</Text>
        <Text style={styles.priceCol}>R$ 83,70</Text>
      </View>
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
