/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { memo, ReactNode, useEffect, useRef, useState } from "react";
import { useLiveAPIContext } from "@/contexts/live-api-context";
import { AudioRecorder } from "@/lib/audio-recorder";
import { Mic, MicOff, Pause, Play } from "lucide-react";

type MediaStreamButtonProps = {
  isStreaming: boolean;
  onIcon: string | ReactNode;
  offIcon: string | ReactNode;
  start: () => Promise<any>;
  stop: () => any;
};

const MediaStreamButton = memo(
  ({ isStreaming, onIcon, offIcon, start, stop }: MediaStreamButtonProps) =>
    isStreaming ? (
      <button className="standard-button" onClick={stop}>
        <span>{onIcon}</span>
      </button>
    ) : (
      <button className="standard-button" onClick={start}>
        <span>{offIcon}</span>
      </button>
    )
);

MediaStreamButton.displayName = "MediaStreamButton";

function ControlButtons() {
  const [inVolume, setInVolume] = useState(0);
  const [audioRecorder] = useState(() => new AudioRecorder());
  const [muted, setMuted] = useState(false);
  const connectButtonRef = useRef<HTMLButtonElement>(null);

  const {
    client,
    connected,
    connect,
    disconnect
  } = useLiveAPIContext();

  useEffect(() => {
    if (!connected && connectButtonRef.current) {
      connectButtonRef.current.focus();
    }
  }, [connected]);
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--volume",
      `${Math.max(5, Math.min(inVolume * 200, 8))}px`
    );
  }, [inVolume]);

  useEffect(() => {
    const onData = (base64: string) => {
      client.sendRealtimeInput([
        {
          mimeType: "audio/pcm;rate=16000",
          data: base64
        }
      ]);
    };
    if (connected && !muted && audioRecorder) {
      audioRecorder.on("data", onData).on("volume", setInVolume).start();
    } else {
      audioRecorder.stop();
    }
    return () => {
      audioRecorder.off("data", onData).off("volume", setInVolume);
    };
  }, [connected, client, muted, audioRecorder]);


  return (
    <section className="control-buttons">
      <nav className={cn("flex ", { disabled: !connected })}>
        <button
          className={cn("standard-button")}
          onClick={() => setMuted(!muted)}
        >
          {!muted ? (
            <span>
              <Mic size={24} />
            </span>
          ) : (
            <span>
              <MicOff size={24} />
            </span>
          )}
        </button>
      </nav>

      <nav className={cn("connection-container", { connected })}>
        <button
          ref={connectButtonRef}
          className={cn("standard-button", { connected })}
          onClick={connected ? disconnect : connect}
        >
          <span>
            {connected ? <Pause size={24} /> : <Play size={24} />}
          </span>
        </button>
        <span className="text-indicator">Streaming</span>
      </nav>
    </section>
  );
}

export default memo(ControlButtons);
