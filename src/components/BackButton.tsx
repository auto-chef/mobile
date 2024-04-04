import { ChevronLeft } from "lucide-react-native";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { theme } from "@/styles";

interface BackButtonProps extends TouchableOpacityProps {}

export function BackButton({ ...props }: BackButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...props}>
      <ChevronLeft size={16} color={theme.zinc[100]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",

    height: 48,
    width: 48,

    borderRadius: 10,
    borderWidth: 1,

    backgroundColor: theme.zinc[900],
    borderColor: theme.zinc[800],
  },
  icon: {
    color: theme.white,
    fontWeight: "500",
  },
});
