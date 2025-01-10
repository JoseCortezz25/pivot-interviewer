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
  const [description, setDescription] = useState<string>("");

  const voices: Voice[] = [
    { id: "breeze", name: "Breeze" },
    { id: "cove", name: "Cove" },
    { id: "sky", name: "Sky" },
    { id: "juniper", name: "Juniper" }
  ];

  return (
    <div className="min-h-[calc(100dvh-80px)] flex items-center justify-center mx-auto p-6 max-w-7xl animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Configuration */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Describe que deseas practicar, que deseas mejorar, tu objetivo y tu campo de trabajo.
            </h2>
            <Textarea
              placeholder="Escribe aquí..."
              className="w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Elige una voz para tu entrevistador</h2>
            <div className="grid grid-cols-2 gap-3">
              {voices.map((voice) => (
                <button
                  key={voice.id}
                  onClick={() => setSelectedVoice(voice)}
                  className={`p-4 rounded-lg border-2 flex items-center gap-2 transition-all
                    ${selectedVoice?.id === voice.id
                      ? "bg-primary/20 border-primary"
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

          <Button
            onClick={() => selectedVoice && onComplete(selectedVoice)}
            disabled={!selectedVoice || !description.trim()}
            size="full"
            className="w-full bg-primary hover:bg-primary/90 text-white py-4 dark:bg-white dark:text-black"
          >
            Comenzar entrevista
          </Button>
        </div>

        {/* Right Column - Preview */}
        <div className="bg-muted/60 p-6 rounded-xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Resumen de la Entrevista</h2>
            <p className="text-sm text-muted-foreground">
              La entrevista se adaptará a tus objetivos y campo de trabajo para brindarte una experiencia personalizada.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-md font-medium mb-2">Objetivo de la práctica</h3>
              <p className="text-sm text-muted-foreground">
                {description || "Aún no has descrito tu objetivo"}
              </p>
            </div>

            <div>
              <h3 className="text-md font-medium mb-2">Voz del entrevistador</h3>
              <p className="text-sm text-muted-foreground">
                {selectedVoice?.name || "No has seleccionado una voz"}
              </p>
            </div>

            <div>
              <h3 className="text-md font-medium mb-2">Duración de la prueba</h3>
              <p className="text-sm text-muted-foreground">5 minutos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};