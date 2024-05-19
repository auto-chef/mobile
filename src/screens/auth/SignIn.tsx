import { ScrollView, StyleSheet, View } from "react-native";

import { Button, Input, Link, Terms } from "@/components";
import { toast } from "@/helpers";
import { useAuth, useForm } from "@/hooks";
import type { ScreenProps } from "@/navigation";
import { AuthTitle } from "./components";
import { SignInSchema, signInSchema } from "./validators";

export function SignInScreen({ navigation, route }: ScreenProps<"SignIn">) {
  const { signIn } = useAuth();
  const { handleSubmit, register, isSubmitting, getValue } =
    useForm<SignInSchema>({
      initialValues: {
        email: route.params?.email || "",
        password: "",
      },
      validationSchema: signInSchema,
    });

  async function onSubmit(data: SignInSchema) {
    try {
      await signIn(data);

      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } catch (error) {
      toast({
        type: "error",
        text1: error.message,
      });
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="always"
    >
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
        <Link
          disabled={isSubmitting}
          onPress={() =>
            navigation.navigate("RecoverPassword", { email: getValue("email") })
          }
        >
          Esqueci minha senha
        </Link>
        <Button isLoading={isSubmitting} onPress={handleSubmit(onSubmit)}>
          Login
        </Button>
        <Button
          variant="secondary"
          disabled={isSubmitting}
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
