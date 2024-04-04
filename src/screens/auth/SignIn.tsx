import { ScrollView, StyleSheet, View } from "react-native";

import { Button, Header, Input, Link, Terms } from "@/components";
import { AuthTitle } from "./components";

export function SignInScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.content}>
          <AuthTitle title="Entre em sua conta" />
          <Input placeholder="E-mail" keyboardType="email-address" />
          <Input placeholder="Senha" secureTextEntry />
          <Link>Esqueci minha senha</Link>
          <Button>Login</Button>
          <Button variant="secondary">Criar nova conta</Button>
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
