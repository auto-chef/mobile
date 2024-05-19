import { theme } from "@/styles";
import { useNavigation } from "@react-navigation/native";
import { ChefHatIcon } from "lucide-react-native";
import { Button } from "./Button";
import { MotiView } from "moti";

export function ChefIAButton() {
  const { navigate } = useNavigation();

  return (
    <MotiView
      style={{
        position: "absolute",
        bottom: 36,
        right: 36,
      }}
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 500,
        delay: 500,
      }}
    >
      <Button
        style={{
          height: 56,
          width: 56,
          borderRadius: 12,
          elevation: 20,
        }}
        activeOpacity={0.9}
        onPress={() => navigate("ChefIAModal")}
      >
        <ChefHatIcon size={24} color={theme.white} />
      </Button>
    </MotiView>
  );
}
