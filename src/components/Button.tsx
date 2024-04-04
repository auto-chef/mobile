import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { theme } from "@/styles";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant]]}
      activeOpacity={0.7}
      {...props}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",

    minHeight: 48,
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 12,
  },
  text: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,

    color: theme.white,
    fontWeight: "500",
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
