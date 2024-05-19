import { ConfirmationModal } from "@/components";
import { useAuth } from "@/hooks";
import { theme } from "@/styles";

export function SignOutModal({ navigation }) {
  const { signOut } = useAuth();

  return (
    <ConfirmationModal
      cancelText="Não, cancelar"
      confirmColor={theme.red[600]}
      confirmText="Sim, sair"
      onConfirm={async () => {
        await signOut();

        navigation.reset({
          index: 0,
          routes: [{ name: "Welcome" }],
        })
      }}
      text="Deseja sair da sua conta?"
    />
  );
}
