import { useEffect, useState } from "react";
import { useTextToSpeech } from "./use-text-to-speech.hook";

type Prompt = {
  id: string;
  agent: "ai" | "user";
  text?: string;
};

export type PromptStatus = "LISTENING" | "SPEAKING" | "THINKING";

interface UsePrompt {
  prompt: Prompt[];
  onFinish?: () => void;
}

export function usePrompt({ prompt, onFinish }: UsePrompt) {
  const { startSpeak, stopSpeak, isSpeaking } = useTextToSpeech();
  const [currentPromptStep, setCurrentPromptStep] = useState(0);
  const promptStatus: PromptStatus =
    prompt[currentPromptStep]?.agent === "user"
      ? "LISTENING"
      : isSpeaking
      ? "SPEAKING"
      : "THINKING";

  useEffect(() => {
    const { text, agent } = prompt[currentPromptStep];

    if (agent === "ai") {
      startSpeak(text, () => {
        if (currentPromptStep + 1 === prompt.length) {
          return onFinish?.();
        }

        setCurrentPromptStep((prev) => prev + 1);
      });
    }
  }, [currentPromptStep]);

  function handleNextPrompt() {
    setCurrentPromptStep((prev) => prev + 1);
  }

  return {
    promptStatus,
    handleStopPrompt: stopSpeak,
    handleNextPrompt,
  };
}
