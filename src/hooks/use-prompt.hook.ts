import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

import { GOOGLE_GEMINI_API_KEY } from "@env";
import { useTextToSpeech } from "./use-text-to-speech.hook";

const genAI = new GoogleGenerativeAI(GOOGLE_GEMINI_API_KEY);

const basicVoices = {
  WELCOME_WITHOUT_RESTAURANT:
    "Olá, seja bem-vindo ao AutoChef. Antes de prosseguirmos, preciso confirmar alguns detalhes. Em qual restaurante você gostaria de fazer seu pedido?",
  RESTAURANT_NOT_FOUND:
    "Não foi possível encontrar o restaurante informado. Que tal indicar o AutoChef para ele?",
  CANCEL_MESSAGE: "Certo, seu pedido foi cancelado. Muito obrigado!",
  CONFIRM_ORDER: "Seu pedido está correto?",
  ORDER_CONFIRMED: "Seu pedido foi confirmado. Obrigado por usar o AutoChef!",
};

type Prompt = {
  id: string;
  agent: "ai" | "user";
  text?: string;
};

export type PromptStatus = "LISTENING" | "SPEAKING" | "THINKING";

interface UsePrompt {
  onFinish?: () => void;
}

export function usePrompt({ onFinish }: UsePrompt) {
  const [prompt, setPrompt] = useState<Prompt[]>([
    {
      id: "first-message",
      agent: "user",
    },
  ]);
  const [promptStatus, setPromptStatus] = useState<PromptStatus>("LISTENING");

  const { startSpeak, stopSpeak, isSpeaking } = useTextToSpeech();
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

  async function handleNextPrompt(message: string) {
    setPrompt((prompt) => [
      ...prompt,
      {
        id: String(prompt.length),
        agent: "user",
        text: message,
      },
    ]);

    setPromptStatus("THINKING");

    let nextMessage = (await getNextAIMessage(message))
      .replace("\n", "")
      .trim();
    const transcribedMessage = Object.keys(basicVoices).includes(nextMessage)
      ? basicVoices[nextMessage]
      : nextMessage;

    setPromptStatus("SPEAKING");

    setPrompt((prompt) => [
      ...prompt,
      {
        id: String(prompt.length),
        agent: "ai",
        text: transcribedMessage,
      },
    ]);

    if (transcribedMessage.startsWith("{")) {
      return onFinish?.();
    }

    startSpeak(transcribedMessage, () => {
      setPromptStatus("LISTENING");
    });
  }

  async function getNextAIMessage(message: string) {
    try {
      const defaultMessagesList = Object.entries(basicVoices)
        .map(([name, value]) => `${name}: ${value}`)
        .join(", ");

      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [
              {
                text: `Você é uma inteligencia conversacional de voz chamada ChefIA no aplicativo AutoChef, que visa melhorar a experiência em drive thrus, permitindo fazer pedidos previamente. Você deve auxiliar o usuário a gerar o pedido. Caso o usuário não informe, solicite o nome do restaurante, os itens dos pedidos e pergunte se ele gostaria de remover algum extra do produto. Seja breve e considere que você está falando por voz. Apenas ao final do pedido, você deve me retorná-lo como uma mensagem semelhante a um JSON na mensagem como o seguinte exemplo, ele não precisa ser formatado com tabulações ou nada semelhante, me entregue um texto corrido: { restaurant: string; items: { name: string; amount: number; extras: { name: 'string; amount: number; type: 'add' | 'remove'; }}[] }. Além disso, a aplicação já terá algumas falas pré-gravadas que vão ser representadas como enums, elas são, quando houver algum caso semelhante, me retorne apenas o nome da enum: ${defaultMessagesList}. Os restaurantes válidos são apenas: 'Mc Donalds Av. Paulista' e 'Divino Fogão Shopping Cidade Jardim'. Lembre-se de confirmar o nome do restaurante com o usuário, além disso os itens do pedido ao final.`,
              },
            ],
          },
          {
            role: "model",
            parts: [{ text: "Entendido!" }],
          },
          ...prompt.slice(0, -1).map((prompt) => ({
            role: prompt.agent === "ai" ? "model" : "user",
            parts: [{ text: prompt.text }],
          })),
        ],
        generationConfig: {
          maxOutputTokens: 8192,
          temperature: 1,
          topP: 0.95,
          topK: 40,
        },
      });

      const result = await chat.sendMessage(message);

      return result.response.text();
    } catch (error) {
      console.log("Erro na transcrição!", error);
    }
  }

  return {
    promptStatus,
    handleStopPrompt: stopSpeak,
    handleNextPrompt,
  };
}
