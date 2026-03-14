"use client";

import { Pause, Speaker } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "./button";

export function Music() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* hidden audio element */}
      <audio ref={audioRef} src="/music.mpeg" loop />

      <Button
        variant="outline"
        size="icon"
        onClick={toggleAudio}
        aria-label="Toggle music"
        className="relative cursor-pointer"
      >
        {isPlaying ? (
          <Pause className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Speaker className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>
    </>
  );
}
