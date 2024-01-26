"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RefreshLeftSquare } from "iconsax-react";
import { useEffect, useRef, useState } from "react";

export default function Pomodoro() {
  const initialSeconds = 1200;
  const [seconds, setSeconds] = useState(initialSeconds); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const startAudioRef = useRef(null);
  const stopAudioRef = useRef(null);
  const tickAudioRef = useRef(null);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    if(seconds === 5 || seconds === 4 || seconds === 3 || seconds === 2 || seconds === 1 ){
        playAudio(tickAudioRef);
    }
    if (seconds <= 0) {
      resetTimer();
    }
  }, [seconds]);

  const startTimer = () => {
    playAudio(startAudioRef);
    setTimeout(() => {
      setIsActive(true);
    }, 200);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    if (isActive) {
      playAudio(stopAudioRef);
      setTimeout(() => {
        setIsActive(false);
        setSeconds(initialSeconds);
      }, 50);
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const playAudio = (audioRef) => {
    if (audioRef.current) {
      audioRef.current.volume = 30 / 100;
      audioRef.current.play();
    }
  };

  return (
    <AnimatePresence>
      <div className="pomo bg-grey h-40 rounded-lg flex items-center px-2 py-2 flex-col">
        <div className="time text-3xl font-semibold text-lightGrey mt-3 border-b-2 pb-3 w-full text-center border-grey2">
          <AnimatePresence mode="wait">
            <motion.p
              className="text-lightGrey"
              key={seconds} // Add a unique key to ensure smooth transitions
              style={{ fontSize: "2rem", fontWeight: "bold" }}
              initial={{ y: 5 }}
              animate={{
                y: 0,
                transition: { ease: "easeInOut", bounce: 0.25 },
              }}
              exit={{ y: -5, opacity: 0.1 }}
              transition={{ duration: 0.2 }}
            >
              {formatTime(seconds)}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="controls flex-1 flex mt-4 gap-4">
          <div className="play">
            {!isActive && (
              <Play
                size="36"
                onClick={startTimer}
                className="text-lightGrey cursor-pointer"
              />
            )}
          </div>
          <div className="reset">
            <RefreshLeftSquare
              size="36"
              className="text-lightGrey cursor-pointer"
              onClick={resetTimer}
            />
          </div>
        </div>
        <audio ref={startAudioRef}>
          <source src="/sounds/start.mp3" type="audio/mp3" />
        </audio>
        <audio
          ref={stopAudioRef}
          src="/sounds/end.mp3"
          type="audio/mp3"
        ></audio>
        <audio
          ref={tickAudioRef}
          src="/sounds/tick.mp3"
          type="audio/mp3"
        ></audio>
      </div>
    </AnimatePresence>
  );
}
