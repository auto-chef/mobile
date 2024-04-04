import { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { fontFamily, theme } from "@/styles";

interface LinkProps {
  onPress?: () => void;
  children: ReactNode;
}

export function Link({ onPress, children }: LinkProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.link}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    paddingVertical: 4,

    color: theme.zinc[100],

    fontSize: 14,
    textDecorationLine: "underline",
    fontWeight: "500",

    fontFamily: fontFamily.regular,
  },
});
