import { useState, useRef } from "react";
import { Mic, Square, AudioLines, X, Lock, Send } from "lucide-react";

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
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative animate-fade-in">
      {/* Background blobs */}
      <div className="blob w-64 h-64 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      {/* Lock indicator */}
      <div
        className={`absolute top-32 transition-all duration-300 ${isRecording && !isLocked
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
          }`}
      >
        <Lock
          className={`w-8 h-8 text-secondary transition-all duration-300 ${dragPosition.y > 50 ? 'scale-125 text-primary' : ''
            }`}
        />
      </div>

      {/* Recording visualization */}
      <div className="flex-1 flex items-center justify-center">
        <div className={`w-48 h-48 rounded-full flex items-center justify-center transition-all duration-300 ${isRecording ? 'bg-secondary/20 scale-110' : 'bg-muted'
          }`}>
          {isRecording ? (
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <AudioLines
                  key={i}
                  className="w-8 h-8 text-secondary animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          ) : (
            <div className="text-muted-foreground">
              Mantén presionado para grabar
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="w-full flex items-center justify-center gap-6 mb-12">
        <button
          className="w-16 h-16 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
          onClick={onCancel}
        >
          <X className="w-6 h-6" />
        </button>

        <button
          ref={buttonRef}
          className={`recording-button w-20 h-20 rounded-full transition-all duration-300 ${isRecording
            ? 'bg-secondary scale-110'
            : 'bg-primary hover:bg-primary/90'
            } flex items-center justify-center`}
          style={{
            transform: isLocked ? 'scale(1.1)' : `scale(1.1) translateY(${-dragPosition.y}px)`
          }}
          onPointerDown={isLocked ? handleSend : handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {isLocked ? (
            <Send className="w-8 h-8 text-white" />
          ) : isRecording ? (
            <Square className="w-8 h-8 text-white animate-pulse" />
          ) : (
            <Mic className="w-8 h-8 text-white" />
          )}
        </button>

        <div className="w-16 h-16" /> {/* Spacer for alignment */}
      </div>

      {/* Instructions text */}
      <p className="text-sm text-muted-foreground absolute bottom-8">
        {isLocked
          ? 'Pulsa para enviar'
          : isRecording
            ? 'Desliza hacia arriba para bloquear'
            : 'Pulsa y mantén para grabar'}
      </p>
    </div>
  );
};
