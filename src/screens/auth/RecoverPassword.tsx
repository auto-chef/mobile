import { ScrollView, StyleSheet, View } from "react-native";

import { Button, Header, Input, Terms } from "@/components";
import { AuthTitle } from "./components";

export function RecoverPasswordScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.content}>
          <AuthTitle title="Recuperar senha" />
          <Input placeholder="E-mail" keyboardType="email-address" />
          <Button>Enviar e-mail de recuperação</Button>
          <Terms />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    gap: 12,

    padding: 24,
  },
});
