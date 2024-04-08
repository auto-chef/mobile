import { ConfirmationModal } from "@/components";
import { theme } from "@/styles";

export function SignOutModal({ navigation }) {
  return (
    <ConfirmationModal
      cancelText="Não, cancelar"
      confirmColor={theme.red[600]}
      confirmText="Sim, sair"
      onConfirm={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: "Welcome" }],
        })
      }
      text="Deseja sair da sua conta?"
    />
  );
}
