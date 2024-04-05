import { useNavigation } from "@react-navigation/native";
import * as Speech from "expo-speech";
import { Dimensions, TouchableOpacity, View } from "react-native";

import { ChefIATalk } from "@/assets/ChefIATalk";
import { Button, Title } from "@/components";
import { theme } from "@/styles";
import { useEffect } from "react";
import { useTextToSpeech } from "@/hooks";

export function ChefIAModal() {
  const { goBack } = useNavigation();
  const { startSpeak, stopSpeak, isSpeaking  } = useTextToSpeech();

  useEffect(() => {
    startSpeak(
      "Certo! Vamos confirmar seu pedido no Méqui Donalds Av. Paulista. O que você gostaria de pedir?"
    );
  }, []);

  function onClose() {
    stopSpeak();
    goBack();
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <TouchableOpacity
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        onPress={onClose}
      >
        <View />
      </TouchableOpacity>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          gap: 48,
          elevation: 20,

          padding: 24,
          width: Dimensions.get("window").width,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 1,

          backgroundColor: theme.zinc[950],
          borderColor: theme.zinc[800],
        }}
      >
        <Title style={{ textAlign: "center" }}>
          Como posso atender sua fome hoje?
        </Title>
        <ChefIATalk status={isSpeaking ? "SPEAKING" : "LISTENING"} />
      </View>
    </View>
  );
}
