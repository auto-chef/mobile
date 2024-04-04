import { theme } from "@/styles";
import { useNavigation } from "@react-navigation/native";
import { ChefHatIcon } from "lucide-react-native";
import { Button } from "./Button";

export function ChefIAButton() {
  const { navigate } = useNavigation();

  return (
    <Button
      style={{
        height: 56,
        width: 56,
        position: "absolute",
        bottom: 36,
        right: 36,
        borderRadius: 12,
        elevation: 20,
      }}
      activeOpacity={0.9}
      onPress={() => navigate("ChefIAModal")}
    >
      <ChefHatIcon size={24} color={theme.white} />
    </Button>
  );
}
