import { StyleSheet, Text, View } from "react-native";

import { DriveThruIllustration } from "@/assets";
import { Button, Header, Title } from "@/components";
import { fontFamily, theme } from "@/styles";

export function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View />
        <View style={styles.gapContainer}>
          <DriveThruIllustration />
          <Title style={styles.title}>Olá, boas vindas ao AutoChef</Title>
          <Text style={styles.text}>
            A melhor versão do Drive Thru que você já viu! Faça login para obter
            uma experiência completa!
          </Text>
        </View>
        <View style={styles.gapContainer}>
          <Button>Já sou cliente</Button>
          <Button variant="secondary">Criar nova conta</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",

    padding: 24,
  },
  title: {
    textAlign: "center",
  },
  text: {
    color: theme.zinc[400],

    fontSize: 18,
    textAlign: "center",
    fontFamily: fontFamily.regular,
  },
  gapContainer: {
    gap: 12,
  },
});
