import { StyleSheet, View } from "react-native";

import { BackButton, Title } from "@/components";

interface AuthTitleProps {
  title: string;
}

export function AuthTitle({ title }: AuthTitleProps) {
  return (
    <View style={styles.container}>
      <BackButton />
      <Title>{title}</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingBottom: 40,
  },
});
