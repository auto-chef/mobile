import { ChefHatIcon } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

import { EmptyCartIllustration } from "@/assets";
import { Button } from "@/components";
import { fontFamily, theme } from "@/styles";

export function EmptyOrderList() {
  return (
    <View style={styles.container}>
      <EmptyCartIllustration />
      <Text style={styles.text}>
        Nenhum pedido realizado até o momento, que tal fazer um agora?
      </Text>
      <Button icon={ChefHatIcon}>
        Falar com o ChefIA
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  text: {
    color: theme.zinc[400],

    fontSize: 18,
    textAlign: "center",
    fontFamily: fontFamily.regular
  },
});
