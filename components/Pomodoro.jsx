"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RefreshLeftSquare } from "iconsax-react";
import { useEffect, useState } from "react";

export default function Pomodoro() {
  const [seconds, setSeconds] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

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

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(1500);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
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
              animate={{ y: 0 , transition: {ease: "easeInOut"}}}
              exit={{ y: -10, opacity: 0.1 }}
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
      </div>
    </AnimatePresence>
  );
}
