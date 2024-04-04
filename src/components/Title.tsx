import { StyleSheet, Text, TextProps } from "react-native";

import { fontFamily, theme } from "@/styles";

interface TitleProps extends TextProps {}

export function Title({ children, style, ...props }: TitleProps) {
  return (
    <Text style={[styles.title, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: theme.zinc[50],

    fontFamily: fontFamily.medium,
  },
});
