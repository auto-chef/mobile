import * as Speech from "expo-speech";
import { useState } from "react";

export function useTextToSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  function startSpeak(text: string) {
    if (Speech.isSpeakingAsync()) Speech.stop();

    Speech.speak(text, {
      language: "pt-BR",
      voice: "pt-br-x-ptd-network",
      pitch: 0.9,
      rate: 1.25,
      onStart: () => setIsSpeaking(true),
      onDone: () => setIsSpeaking(false),
    });
  }

  function stopSpeak() {
    Speech.stop();
  }

  return { isSpeaking, startSpeak, stopSpeak };
}
