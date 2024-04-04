import { ScrollView, StyleSheet, View } from "react-native";

import { Button, Input, Link, Terms } from "@/components";
import { AuthTitle } from "./components";

export function SignInScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.content}>
        <AuthTitle title="Entre em sua conta" />
        <Input placeholder="E-mail" keyboardType="email-address" />
        <Input placeholder="Senha" secureTextEntry />
        <Link onPress={() => navigation.navigate("RecoverPassword")}>
          Esqueci minha senha
        </Link>
        <Button>Login</Button>
        <Button
          variant="secondary"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "Welcome" }, { name: "SignUp" }],
            });
          }}
        >
          Criar nova conta
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
