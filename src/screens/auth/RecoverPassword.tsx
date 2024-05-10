import { ScrollView, StyleSheet, View } from "react-native";

import { Button, Input, Terms } from "@/components";
import { toast } from "@/helpers";
import { useForm } from "@/hooks";
import { AuthTitle } from "./components";
import { recoverPasswordRequest } from "./requests";
import {
  RecoverPasswordSchema,
  recoverPasswordSchema,
} from "./validators/recover-password.validator";

export function RecoverPasswordScreen({ navigation }) {
  const { register, handleSubmit } = useForm<RecoverPasswordSchema>({
    initialValues: {
      email: "",
    },
    validationSchema: recoverPasswordSchema,
  });

  async function onSubmit(data: RecoverPasswordSchema) {
    try {
      await recoverPasswordRequest(data);

      navigation.reset({
        index: 0,
        routes: [{ name: "SignIn" }],
      });

      toast({
        type: "success",
        text1: "E-mail de recuperação enviado",
        text2: "Verifique sua caixa de entrada",
      });
    } catch (error) {
      toast({
        type: "error",
        text1: error.message,
      });
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.content}>
        <AuthTitle title="Recuperar senha" />
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoFocus
          {...register("email")}
        />
        <Button onPress={handleSubmit(onSubmit)}>
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
