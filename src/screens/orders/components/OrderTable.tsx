import { StatusCircle } from "@/components";
import { statusData } from "@/helpers";
import { useAuth } from "@/hooks";
import { OrderModel } from "@/models";
import { fontFamily, theme } from "@/styles";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export function OrderTable() {
  const { params: order } = useRoute() as { params: OrderModel };
  const { user } = useAuth();

  return (
    <View>
      <View style={styles.tr}>
        <Text style={styles.th}>Status</Text>
        <View style={styles.statusRow}>
          <StatusCircle status={order.status} />
          <Text style={styles.td}>{statusData[order.status].name}</Text>
        </View>
      </View>
      <View style={styles.tr}>
        <Text style={styles.th}>Cliente</Text>
        <Text style={styles.td}>{user.name}</Text>
      </View>
      <View style={styles.tr}>
        <Text style={styles.th}>Telefone</Text>
        <Text style={styles.td}>{user.phone}</Text>
      </View>
      <View style={styles.tr}>
        <Text style={styles.th}>E-mail</Text>
        <Text style={styles.td}>{user.email}</Text>
      </View>
      <View style={styles.tr}>
        <Text style={styles.th}>Criado há</Text>
        <Text style={styles.td}>há menos de um minuto</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tr: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 16,
    paddingHorizontal: 24,

    borderBottomWidth: 1,
    borderColor: theme.zinc[800],
  },
  th: {
    color: theme.zinc[400],
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },
  td: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
