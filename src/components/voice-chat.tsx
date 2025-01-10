import { useState, useRef } from "react";
import { Mic, X, Lock, Send, Square } from "lucide-react";
import { cn } from "@/lib/utils";

interface VoiceChatProps {
  onCancel: () => void;
}

export const VoiceChat = ({ onCancel }: VoiceChatProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const dragStartPos = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!isLocked) {
      setIsRecording(true);
      dragStartPos.current = { x: e.clientX, y: e.clientY };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isRecording && !isLocked) {
      const deltaY = dragStartPos.current.y - e.clientY;
      setDragPosition({ x: 0, y: Math.max(0, Math.min(deltaY, 100)) });

      if (deltaY > 50) {
        setIsLocked(true);
        setDragPosition({ x: 0, y: 0 });
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isLocked) {
      setIsRecording(false);
      setDragPosition({ x: 0, y: 0 });
    }
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handleSend = () => {
    setIsRecording(false);
    setIsLocked(false);
  };

  return (
    <div className="min-h-[calc(100dvh-80px)] flex flex-col items-center justify-center p-6 relative animate-fade-in w-full container mx-auto">
      {/* Recording visualization */}
      <div className="flex-1 flex items-center justify-center pointer-events-none touch-none">
        <div
          className={cn("bg-primary w-48 h-48 rounded-full flex items-center justify-center transition-all duration-300",
            isRecording && "bg-primary/90 scale-110"
          )}
          {...(isLocked && { style: { transform: "scale(1.1)" } })}
        >
        </div>
      </div>

      {/* Controls */}
      <div className="w-full sm:w-[80%] lg:w-[50%] flex items-center justify-between gap-6 mb-12">
        <button
          className="h-[68px] w-[68px] min-h-[68px] min-w-[68px] rounded-full bg-black/10 flex items-center justify-center hover:bg-black/25 transition-colors dark:bg-white/30"
          onClick={onCancel}
        >
          <X className="w-6 h-6" />
        </button>


        <div className="relative">
          <div className={cn("bg-primary/50  opacity-30 rounded-full h-[40px] w-[40px] flex items-center justify-center absolute -top-[65px] left-1/2 -translate-x-1/2",
            isRecording && !isLocked ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            <Lock
              className={cn("text-secondary transition-all duration-300 h-5 w-5",
                dragPosition.y > 50 && "scale-125 text-primary"
              )}
            />
          </div>

          <button
            ref={buttonRef}
            className={cn("recording-button touch-none h-[68px] w-[68px] min-h-[68px] min-w-[65px] rounded-full transition-all duration-300 flex items-center justify-center",
              isRecording ? "bg-red-500 scale-110" : "bg-primary hover:bg-primary/90 dark:bg-[#1a1817]"
            )}
            onPointerDown={isLocked ? handleSend : handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            {isLocked ? (
              <Send className="w-6 h-6 text-white" />
            ) : isRecording ? (
              <Square className="w-6 h-6 text-white animate-pulse" />
            ) : (
              <Mic className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

      </div>

      {/* Instructions text */}
      <p className="text-sm text-muted-foreground font-bold absolute bottom-8 pointer-events-none">
        {isLocked
          ? 'Pulsa para enviar'
          : isRecording
            ? 'Desliza hacia arriba para bloquear'
            : 'Pulsa y mantén para grabar'}
      </p>
    </div>
  );
};
