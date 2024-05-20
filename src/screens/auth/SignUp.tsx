import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import { Button, Input, Terms } from "@/components";
import { maskCPF, toast } from "@/helpers";
import { useAuth, useForm } from "@/hooks";
import { AuthTitle } from "./components";
import { signUpRequest } from "./requests";
import { SignUpSchema, signUpSchema } from "./validators";

export function SignUpScreen({ navigation }) {
  const { signIn } = useAuth();
  const {
    formData,
    handleSubmit,
    register,
    errors,
    setValue,
    clearError,
    isSubmitting,
  } = useForm<SignUpSchema>({
    initialValues: {
      name: "",
      cpf: "",
      birthDate: undefined,
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
  });

  async function onSubmit(data: SignUpSchema) {
    try {
      await signUpRequest(data);

      toast({
        type: "success",
        text1: "Cadastro realizado com sucesso!",
      });

      navigation.reset({
        index: 0,
        routes: [{ name: "Welcome" }, { name: "SignIn" }],
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
        <AuthTitle title="Cadastre sua conta" />
        <Input placeholder="Nome" autoFocus {...register("name")} />
        <Input
          placeholder="CPF"
          keyboardType="numeric"
          {...register("cpf", {
            onChange: maskCPF,
          })}
          maxLength={14}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            DateTimePickerAndroid.open({
              value: formData.birthDate || new Date(),
              mode: "date",
              onChange: (event, date) => {
                clearError("birthDate");
                setValue("birthDate", date);
              },
              maximumDate: new Date(),
              display: "spinner",
            });
          }}
        >
          <Input
            placeholder="Data de nascimento"
            readOnly
            value={formData.birthDate?.toLocaleDateString("pt-BR")}
            error={errors.birthDate}
          />
        </TouchableOpacity>
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          {...register("email")}
        />
        <Input
          placeholder="Senha"
          secureTextEntry
          autoCapitalize="none"
          {...register("password")}
        />
        <Button onPress={handleSubmit(onSubmit)} isLoading={isSubmitting}>
          Cadastrar
        </Button>
        <Button
          disabled={isSubmitting}
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
