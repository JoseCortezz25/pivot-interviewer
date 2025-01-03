"use client";
import { VoiceChat } from "@/components/voice-chat";
import { OnboardingView } from "@/components/onboarding-view";
import { useState } from "react";

type Voice = {
  id: string;
  name: string;
};

const Page = () => {
  const [isOnboarding, setIsOnboarding] = useState(true);
  const [selectedVoice, setSelectedVoice] = useState<Voice>();

  const handleOnboardingComplete = (voice: Voice) => {
    setSelectedVoice(voice);
    setIsOnboarding(false);
  };

  const handleCancel = () => {
    setIsOnboarding(true);
    setSelectedVoice(undefined);
  };

  return (
    <div className="container mx-auto">
      {isOnboarding ? (
        <OnboardingView onComplete={handleOnboardingComplete} />
      ) : (
        <VoiceChat onCancel={handleCancel} />
      )}
    </div>
  );
};

export default Page;