import { ScrollView, StyleSheet, View } from "react-native";

import { Button, Input, Link, Terms } from "@/components";
import { useAuth, useForm } from "@/hooks";
import { AuthTitle } from "./components";
import { SignInSchema, signInSchema } from "./validators";

export function SignInScreen({ navigation }) {
  const { signIn } = useAuth();
  const { handleSubmit, register } = useForm<SignInSchema>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
  });

  async function onSubmit(data: SignInSchema) {
    await signIn(data);
    await navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.content}>
        <AuthTitle title="Entre em sua conta" />
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoFocus
          autoComplete="email"
          {...register("email")}
        />
        <Input
          placeholder="Senha"
          secureTextEntry
          autoCapitalize="none"
          autoComplete="password"
          {...register("password")}
        />
        <Link onPress={() => navigation.navigate("RecoverPassword")}>
          Esqueci minha senha
        </Link>
        <Button onPress={handleSubmit(onSubmit)}>Login</Button>
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
