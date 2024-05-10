import Voice from "@react-native-voice/voice";
import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
import { ActivityIndicator, Dimensions, Text, View } from "react-native";

import { PromptStatus } from "@/hooks";
import { theme } from "@/styles";

interface ChefIATalkProps {
  status: PromptStatus;
  onRecognitionComplete: (text: string) => void;
}

export function ChefIATalk({ status, onRecognitionComplete }: ChefIATalkProps) {
  const animation = useRef<LottieView>(null);

  useEffect(() => {
    Voice.onSpeechResults = (e) => {
      onRecognitionComplete(e.value[0]);
    };
    Voice.start("pt-BR");

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  useEffect(() => {
    if (status === "LISTENING") {
      Voice.start("pt-BR");
    }
  }, [status]);

  if (status === "LISTENING") {
    return (
      <View>
        <Text>Estou ouvindo você. Diga algo para continuar o pedido.</Text>
      </View>
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
