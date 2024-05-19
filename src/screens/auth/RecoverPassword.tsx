import { ScrollView, StyleSheet, View } from "react-native";

import { Button, Input, Terms } from "@/components";
import { toast } from "@/helpers";
import { useForm } from "@/hooks";
import type { ScreenProps } from "@/navigation";
import { AuthTitle } from "./components";
import { recoverPasswordRequest } from "./requests";
import {
  RecoverPasswordSchema,
  recoverPasswordSchema,
} from "./validators/recover-password.validator";

export function RecoverPasswordScreen({ route, navigation }: ScreenProps<"RecoverPassword">) {
  const { register, handleSubmit, isSubmitting } = useForm<RecoverPasswordSchema>({
    initialValues: {
      email: route.params?.email || "",
    },
    validationSchema: recoverPasswordSchema,
  });

  async function onSubmit(data: RecoverPasswordSchema) {
    try {
      await recoverPasswordRequest(data);

      navigation.reset({
        index: 0,
        routes: [{ name: "SignIn", params: data }],
      });

      toast({
        type: "success",
        text1: "E-mail de recuperação enviado",
        text2: "Verifique a caixa de entrada do e-mail informado",
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
        <AuthTitle title="Recuperar senha" />
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoFocus
          {...register("email")}
        />
        <Button onPress={handleSubmit(onSubmit)} isLoading={isSubmitting}>
          Enviar e-mail de recuperação
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
