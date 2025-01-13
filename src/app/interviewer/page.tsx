"use client";
import { VoiceChat } from "@/components/voice-chat";
import { OnboardingView } from "@/components/onboarding-view";
import { useState } from "react";
import { useLiveAPIContext } from "@/contexts/live-api-context";
import { systemPrompt } from "@/lib/prompts";

const Page = () => {
  const [isOnboarding, setIsOnboarding] = useState(true);
  const { setConfig } = useLiveAPIContext();

  const handleOnboardingComplete = (voice: string, description: string) => {
    setIsOnboarding(false);
    setConfig({
      model: "models/gemini-2.0-flash-exp",
      generationConfig: {
        responseModalities: "audio",
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {
              voiceName: voice
            }
          }
        }
      },
      systemInstruction: {
        parts: [
          {
            text: systemPrompt({
              language: "Español",
              userInstructions: description,
              extraInstructions: ""
            })
          }
        ]
      }
    });
  };

  return (
    <div className="container mx-auto">
      {isOnboarding ? (
        <OnboardingView onComplete={handleOnboardingComplete} />
      ) : (
        <VoiceChat />
      )}
    </div>
  );
};

export default Page;