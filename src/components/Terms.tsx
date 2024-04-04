import { StyleSheet, Text } from "react-native";

import { fontFamily, theme } from "@/styles";

export function Terms() {
  return (
    <Text style={styles.terms}>
      Ao continuar você aceita os <Text style={styles.link}>Termos de Uso</Text>{" "}
      e <Text style={styles.link}>Política de Privacidade</Text> definidos pela
      AutoChef.
    </Text>
  );
}

const styles = StyleSheet.create({
  terms: {
    color: theme.zinc[500],
    textAlign: "center",
    marginTop: "auto",
    fontFamily: fontFamily.regular,
  },
  link: {
    textDecorationLine: "underline",
    color: theme.zinc[500],
  },
});
