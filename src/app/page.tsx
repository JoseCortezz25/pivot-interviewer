"use client";
import { VoiceChat } from "@/components/voice-chat";
import { VoiceSelection } from "@/components/voice-selection";
import { WelcomeScreen } from "@/components/welcome-screen";
import { useState } from "react";

type Voice = {
  id: string;
  name: string;
};

type Screen = "welcome" | "voice-selection" | "recording";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [selectedVoice, setSelectedVoice] = useState<Voice>();

  const handleStart = () => {
    setCurrentScreen("voice-selection");
  };

  const handleVoiceConfirm = () => {
    setCurrentScreen("recording");
  };

  const handleCancel = () => {
    setCurrentScreen("welcome");
    setSelectedVoice(undefined);
  };

  return (
    <div className="max-w-md mx-auto">
      {currentScreen === "welcome" && (
        <WelcomeScreen onStart={handleStart} />
      )}

      {currentScreen === "voice-selection" && (
        <VoiceSelection
          onSelect={setSelectedVoice}
          selectedVoice={selectedVoice}
          onConfirm={handleVoiceConfirm}
        />
      )}

      {currentScreen === "recording" && (
        <VoiceChat onCancel={handleCancel} />
      )}
    </div>
  );
}
