import { Check, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Voice {
  id: string;
  name: string;
}

interface VoiceSelectionProps {
  onSelect: (voice: Voice) => void;
  selectedVoice?: Voice;
  onConfirm: () => void;
}

export const VoiceSelection = ({ onSelect, selectedVoice, onConfirm }: VoiceSelectionProps) => {
  const voices: Voice[] = [
    { id: "breeze", name: "Breeze" },
    { id: "cove", name: "Cove" },
    { id: "sky", name: "Sky" },
    { id: "juniper", name: "Juniper" },
    { id: "ember", name: "Ember" }
  ];

  return (
    <div className="min-h-screen p-6 flex flex-col animate-fade-in">
      <div className="flex items-center mb-8">
        <Volume2 className="w-5 h-5 mr-2" />
        <h1 className="text-xl font-semibold">Choose a voice</h1>
      </div>

      <div className="flex-1 space-y-3">
        {voices.map((voice) => (
          <button
            key={voice.id}
            onClick={() => onSelect(voice)}
            className={`w-full p-4 rounded-lg flex items-center justify-between ${selectedVoice?.id === voice.id
                ? "bg-primary/20 border border-primary"
                : "bg-muted hover:bg-muted/80"
              }`}
          >
            <span>{voice.name}</span>
            {selectedVoice?.id === voice.id && (
              <Check className="w-5 h-5 text-primary" />
            )}
          </button>
        ))}
      </div>

      <Button
        onClick={onConfirm}
        disabled={!selectedVoice}
        className="w-full bg-primary hover:bg-primary/90 text-white py-6 mt-4"
      >
        Confirm
      </Button>
    </div>
  );
};
