import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const lineCount = 3;
const initialHeight = 30;

export type AudioPulseProps = {
  active: boolean;
  volume: number;
  hover?: boolean;
};

export const AudioPulse = ({ active, volume, hover }: AudioPulseProps) => {
  const lines = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let timeout: number | null = null;

    const resetLines = () => {
      lines.current.forEach((line) => {
        line.style.height = `${initialHeight}px`;
      });
    };

    const update = () => {
      if (!active) {
        resetLines();
        return;
      }

      lines.current.forEach((line, i) => {
        line.style.height = `${Math.max(
          initialHeight,
          Math.min(
            60,
            initialHeight + volume * (i === 1 ? 200 : 100)
          )
        )}px`;
      });
      timeout = window.setTimeout(update, 100);
    };

    update();
    return () => {
      clearTimeout(timeout!);
      resetLines();
    };
  }, [volume, active]);

  return (
    <div className={cn("audioPulse", { active, hover })}>
      {Array(lineCount)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            ref={(el) => { lines.current[i] = el!; }}
            style={{
              animationDelay: `${i * 133}ms`,
              transition: 'height 0.2s ease-out'
            }}
          />
        ))}
    </div>
  );
};
