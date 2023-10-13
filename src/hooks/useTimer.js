import { useState, useEffect } from "react";

const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      intervalId = window.setInterval(() => {
        setTime((prev) => prev + 1 / 24);
      }, 1000 / 24);
    }

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isRunning]);

  const toggle = () => {
    setIsRunning((prev) => !prev);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return {
    time,
    isRunning,
    toggle,
    reset,
  };
};

export default useTimer;
