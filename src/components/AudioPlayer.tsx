import { useState } from "react";
import Icon from "@/components/ui/icon";

interface AudioPlayerProps {
  title: string;
  duration: string;
}

const AudioPlayer = ({ title, duration }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleToggle = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      let current = progress;
      const interval = setInterval(() => {
        current += 0.5;
        if (current >= 100) {
          clearInterval(interval);
          setIsPlaying(false);
          setProgress(0);
          return;
        }
        setProgress(current);
      }, 300);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setProgress(Math.max(0, Math.min(100, percent)));
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-[var(--love-pink)]/30 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3">
        <button
          onClick={handleToggle}
          className="w-10 h-10 rounded-full bg-[var(--love-pink)] flex items-center justify-center hover:bg-[var(--love-rose)] transition-colors flex-shrink-0"
        >
          <Icon
            name={isPlaying ? "Pause" : "Play"}
            size={18}
            className="text-white ml-[1px]"
          />
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground/80 truncate pr-2">
              {title}
            </span>
            <span className="text-xs text-muted-foreground flex-shrink-0">
              {duration}
            </span>
          </div>

          <div
            className="h-1.5 bg-[var(--love-peach)]/50 rounded-full cursor-pointer group"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-[var(--love-rose)] rounded-full transition-all duration-200 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--love-rose)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" />
            </div>
          </div>
        </div>

        <Icon
          name="Volume2"
          size={16}
          className="text-muted-foreground/60 flex-shrink-0"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
