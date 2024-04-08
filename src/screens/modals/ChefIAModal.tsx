import { useNavigation } from "@react-navigation/native";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

import { ChefIATalk } from "@/assets/ChefIATalk";
import { Title } from "@/components";
import { usePrompt } from "@/hooks";
import { theme } from "@/styles";

export function ChefIAModal() {
  const { goBack } = useNavigation();
  const { handleStopPrompt, handleNextPrompt, promptStatus } = usePrompt({
    prompt: [
      {
        id: "confirm-restaurant",
        agent: "ai",
        text: "Certo! Vamos confirmar seu pedido no Méqui Donalds Av. Paulista. O que você gostaria de pedir?",
      },
      {
        id: "order",
        agent: "user",
      },
      {
        id: "ask-extras",
        agent: "ai",
        text: "Entendido. Você gostaria de adicionar uma anotação extra ao seu pedido? Tal como remoção ou adição de algum ingrediente?",
      },
      {
        id: "extras",
        agent: "user",
      },
      {
        id: "ask-more",
        agent: "ai",
        text: "Certo. Mais algum item? Que tal acrescentar um McShake de morango?",
      },
      {
        id: "more",
        agent: "user",
      },
      {
        id: "confirm-order",
        agent: "ai",
        text: "Seu pedido está quase pronto! Gostaria de confirmar o pedido?",
      },
      {
        id: "confirm",
        agent: "user",
      },
      {
        id: "order-confirmed",
        agent: "ai",
        text: "Seu pedido foi confirmado! Obrigado por escolher o Méqui Donalds Av. Paulista.",
      },
    ],
    onFinish: onClose,
  });

  function onClose() {
    handleStopPrompt();
    goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backdrop} onPress={onClose}>
        <View />
      </TouchableOpacity>
      <View style={styles.content}>
        <Title style={{ textAlign: "center" }}>
          Como posso atender sua fome hoje?
        </Title>
        <ChefIATalk
          onRecognitionComplete={handleNextPrompt}
          status={promptStatus}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  content: {
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
  },
  backdrop: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
