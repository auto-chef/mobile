import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { LucideIcon } from "lucide-react-native";

import { fontFamily, theme } from "@/styles";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary";
  icon?: LucideIcon;
}

export function Button({
  children,
  variant = "primary",
  icon: Icon,
  style,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant], style]}
      activeOpacity={0.7}
      {...props}
    >
      {Icon && <Icon color={theme.white} size={18} />}
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,

    minHeight: 48,
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 12,
  },
  text: {
    color: theme.white,
    fontFamily: fontFamily.medium,
  },
  primary: {
    backgroundColor: theme.primary[500],
    borderColor: theme.border,
  },
  secondary: {
    borderColor: theme.zinc[800],
    color: theme.zinc[100],
  },
});
