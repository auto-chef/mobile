import { ScrollView, StyleSheet, View } from "react-native";

import { Button, Header, Input, Terms } from "@/components";
import { AuthTitle } from "./components";

export function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.content}>
          <AuthTitle title="Cadastre sua conta" />
          <Input placeholder="Nome" />
          <Input placeholder="CPF" keyboardType="numeric" />
          <Input placeholder="Data de nascimento" />
          <Input placeholder="E-mail" keyboardType="email-address" />
          <Input placeholder="Senha" secureTextEntry />
          <Button>Cadastrar</Button>
          <Button variant="secondary">Já possui login?</Button>
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
