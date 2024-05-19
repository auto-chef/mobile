import { theme } from "@/styles";
import { Skeleton as MotiSkeleton } from "moti/skeleton";
import { StyleSheet } from "react-native";

interface SkeletonProps {
  height: number;
  width: number;
}

export function Skeleton({ height, width }: SkeletonProps) {
  return (
    <MotiSkeleton
      colorMode="dark"
      transition={{ duration: 2000 }}
      radius={8}
      width={width}
      height={height}
      backgroundColor={theme.zinc[900]}
    />
  );
}

const styles = StyleSheet.create({
  skeleton: {
    borderRadius: 8,
    backgroundColor: theme.zinc[900],
  },
});
