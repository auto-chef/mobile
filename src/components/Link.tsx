import { StyleSheet, Text, TouchableOpacity, type TouchableOpacityProps } from "react-native";

import { fontFamily, theme } from "@/styles";

export function Link({ children, ...props }: TouchableOpacityProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...props}>
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
