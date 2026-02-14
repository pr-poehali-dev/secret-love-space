import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface AudioPlayerProps {
  title: string;
  duration: string;
  src?: string;
}

const formatTime = (sec: number) => {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const AudioPlayer = ({ title, duration, src }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    if (!src) return;
    const audio = new Audio(src);
    audioRef.current = audio;

    audio.addEventListener("loadedmetadata", () => {
      setTotalDuration(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setCurrentTime(audio.currentTime);
      }
    });

    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [src]);

  const handleToggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !audioRef.current.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    audioRef.current.currentTime = percent * audioRef.current.duration;
  };

  const displayDuration = totalDuration > 0 ? formatTime(totalDuration) : duration;
  const displayCurrent = currentTime > 0 ? formatTime(currentTime) : "0:00";

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
              {displayCurrent} / {displayDuration}
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
