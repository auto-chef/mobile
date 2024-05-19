import { theme } from "@/styles";
import { StyleSheet, View } from "react-native";

interface SkeletonProps {
  height: number;
  width: number;
}

export function Skeleton({ height, width }: SkeletonProps) {
  return <View style={[styles.skeleton, { height, width }]} />;
}

const styles = StyleSheet.create({
  skeleton: {
    borderRadius: 8,
    backgroundColor: theme.zinc[900],
  },
});
