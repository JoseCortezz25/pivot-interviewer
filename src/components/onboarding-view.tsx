"use client";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Textarea } from "./ui/textarea";

interface Voice {
  id: string;
  name: string;
}

interface OnboardingViewProps {
  onComplete: (voice: Voice) => void;
}

export const OnboardingView = ({ onComplete }: OnboardingViewProps) => {
  const [selectedVoice, setSelectedVoice] = useState<Voice>();

  const voices: Voice[] = [
    { id: "breeze", name: "Breeze" },
    { id: "cove", name: "Cove" },
    { id: "sky", name: "Sky" },
    { id: "juniper", name: "Juniper" }
  ];

  return (
    <div className="min-h-[calc(100dvh-80px)] max-w-md mx-auto p-6 flex flex-col animate-fade-in">
      <div className="space-y-10">
        <div className="">
          <h2 className="text-lg font-semibold mb-4">
            Describe que deseas practicar, que deseas mejorar, tu objetivo y tu campo de trabajo.
          </h2>
          <Textarea
            placeholder="Escribe aquí..."
            className="w-full"
          />

        </div>

        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4">Elige una voz para tu entrevistador</h2>
          <div className="grid grid-cols-2 gap-3">
            {voices.map((voice) => (
              <button
                key={voice.id}
                onClick={() => setSelectedVoice(voice)}
                className={`p-4 rounded-lg flex items-center gap-2 transition-all
                ${selectedVoice?.id === voice.id
                    ? "bg-primary/20 border border-primary"
                    : "bg-muted hover:bg-muted/80"
                  }`}
              >
                <span className="text-sm font-medium">{voice.name}</span>
                {selectedVoice?.id === voice.id && (
                  <Check className="w-4 h-4 text-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-md font-semibold">Duración de la prueba: 5 minutos.</h2>
        </div>
      </div>

      <Button
        onClick={() => selectedVoice && onComplete(selectedVoice)}
        disabled={!selectedVoice}
        size="full"
        className="w-full bg-primary hover:bg-primary/90 text-white py-4 mt-6"
      >
        Comenzar entrevista
      </Button>
    </div>
  );
};