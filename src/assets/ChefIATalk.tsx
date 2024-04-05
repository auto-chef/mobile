import { theme } from "@/styles";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import { ActivityIndicator, Dimensions, Text, View } from "react-native";

interface ChefIATalkProps {
  status: "SPEAKING" | "LISTENING" | "THINKING";
}

export function ChefIATalk({ status }: ChefIATalkProps) {
  const animation = useRef<LottieView>(null);

  if (status === "LISTENING") {
    return (
      <Text style={{ height: 50, color: theme.zinc[100] }}>
        Estou ouvindo...
      </Text>
    );
  }

  if (status === "THINKING") {
    return <ActivityIndicator size={50} color={theme.primary[500]} />;
  }

  return (
    <View
      style={{
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: "100%",
          height: Dimensions.get("window").width,
        }}
        source={require("./animations/chefia-speaking.json")}
      />
    </View>
  );
}
