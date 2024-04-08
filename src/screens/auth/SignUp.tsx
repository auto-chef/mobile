import { ScrollView, StyleSheet, View } from "react-native";

import { Button, Input, Terms } from "@/components";
import { AuthTitle } from "./components";

export function SignUpScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.content}>
        <AuthTitle title="Cadastre sua conta" />
        <Input placeholder="Nome" />
        <Input placeholder="CPF" keyboardType="numeric" />
        <Input placeholder="Data de nascimento" />
        <Input placeholder="E-mail" keyboardType="email-address" />
        <Input placeholder="Senha" secureTextEntry />
        <Button
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "Home" }],
            });
          }}
        >
          Cadastrar
        </Button>
        <Button
          variant="secondary"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "Welcome" }, { name: "SignIn" }],
            });
          }}
        >
          Já possui login?
        </Button>
        <Terms />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    gap: 12,

    padding: 24,
  },
});
