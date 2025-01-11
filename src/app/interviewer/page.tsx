"use client";
import { VoiceChat } from "@/components/voice-chat";
import { OnboardingView } from "@/components/onboarding-view";
import { useState } from "react";
import { LiveAPIProvider } from "@/contexts/live-api-context";

type Voice = {
  id: string;
  name: string;
};

// const uri: string = process.env.NEXT_PUBLIC_GOOGLE_REALTIME_URI || '';
const API_KEY: string = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '';
// const host: string = process.env.NEXT_PUBLIC_GOOGLE_REALTIME_HOST || '';

const host = "generativelanguage.googleapis.com";
const uri = `wss://${host}/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent`;

const Page = () => {
  const [isOnboarding, setIsOnboarding] = useState(true);
  const [selectedVoice, setSelectedVoice] = useState<Voice>();

  // const URI = uri && host ? uri.replace('<HOST>', host) : undefined;

  const handleOnboardingComplete = (voice: Voice) => {
    setSelectedVoice(voice);
    setIsOnboarding(false);
  };

  const handleCancel = () => {
    setIsOnboarding(true);
    setSelectedVoice(undefined);
  };

  console.log("API_KEY", API_KEY);


  return (
    <LiveAPIProvider url={uri} apiKey={API_KEY}>
      <div className="container mx-auto">
        {isOnboarding ? (
          <OnboardingView onComplete={handleOnboardingComplete} />
        ) : (
          <VoiceChat onCancel={handleCancel} />
        )}
      </div>
    </LiveAPIProvider>
  );
};

export default Page;