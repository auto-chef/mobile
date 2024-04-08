import LottieView from "lottie-react-native";
import { useRef } from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";

import { Button } from "@/components";
import { PromptStatus } from "@/hooks";
import { theme } from "@/styles";

interface ChefIATalkProps {
  status: PromptStatus;
  onRecognitionComplete: () => void;
}

export function ChefIATalk({ status, onRecognitionComplete }: ChefIATalkProps) {
  const animation = useRef<LottieView>(null);

  if (status === "LISTENING") {
    return <Button onPress={onRecognitionComplete}>Next</Button>;
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
