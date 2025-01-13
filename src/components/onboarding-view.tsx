"use client";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Voices } from "@/lib/types";
import { allVoices, cn } from "@/lib/utils";

interface OnboardingViewProps {
  onComplete: (voice: Voices, description: string) => void;
}

export const OnboardingView = ({ onComplete }: OnboardingViewProps) => {
  const [description, setDescription] = useState<string>("");
  const [selectedVoice, setSelectedVoice] = useState<Voices | null>(null);

  return (
    <div className="min-h-[calc(100dvh-80px-88px)] flex items-center justify-center mx-auto p-6 max-w-7xl animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Configuration */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Describe what you want to practice, what you want to improve, your goal, and your field of work.
            </h2>
            <Textarea
              placeholder="Write here..."
              className="w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Choose a voice for your interviewer</h2>
            <div className="grid grid-cols-2 gap-3">
              {allVoices.map((voice) => (
                <button
                  key={voice.name}
                  onClick={() => setSelectedVoice(voice.name)}
                  className={cn("p-4 rounded-lg border-2 flex items-center gap-2 transition-all",
                    selectedVoice === voice.name
                      ? "bg-primary/20 border-primary"
                      : "bg-muted hover:bg-muted/80"
                  )}
                >
                  <span className="text-sm font-medium">{voice.name}</span>
                  {selectedVoice === voice.name && (
                    <Check className="w-4 h-4 text-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={() => selectedVoice && onComplete(selectedVoice, description)}
            disabled={!selectedVoice || !description.trim()}
            size="full"
            className="w-full bg-primary hover:bg-primary/90 text-white py-4 dark:bg-white dark:text-black"
          >
            Start Interview
          </Button>
        </div>

        {/* Right Column - Preview */}
        <div className="bg-muted/60 p-6 rounded-xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Interview Summary</h2>
            <p className="text-sm text-muted-foreground">
              The interview will adapt to your goals and field of work to provide you with a personalized experience.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-md font-medium mb-2">Practice Goal</h3>
              <p className="text-sm text-muted-foreground">
                {description || "You haven't described your goal yet"}
              </p>
            </div>

            <div>
              <h3 className="text-md font-medium mb-2">Interviewer&apos;s Voice</h3>
              <p className="text-sm text-muted-foreground">
                {selectedVoice || "You haven't selected a voice"}
              </p>
            </div>

            <div>
              <h3 className="text-md font-medium mb-2">Test Duration</h3>
              <p className="text-sm text-muted-foreground">5 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};