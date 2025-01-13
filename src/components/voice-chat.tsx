import { useLiveAPIContext } from "@/contexts/live-api-context";
import { AudioPulse } from "./audio-pulse";
import ControlButtons from "./control-buttons";

export const VoiceChat = () => {
  const { volume, connected } = useLiveAPIContext();

  return (
    <div className="min-h-[calc(100dvh-80px)] flex flex-col items-center justify-center p-6 relative animate-fade-in w-full container mx-auto">
      {/* Recording visualization */}
      <div className="flex-1 flex items-center justify-center pointer-events-none touch-none">
        <AudioPulse
          volume={volume}
          active={connected}
          hover={false}
        />
      </div>

      {/* Controls */}
      <div className="">
        <ControlButtons />
      </div>
    </div>
  );
};
