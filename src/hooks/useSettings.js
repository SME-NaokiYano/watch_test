import { useState } from "react";

const useSettings = () => {
  const [pos, setPos] = useState(localStorage.getItem("pos") === "true");
  const [mode, setMode] = useState(localStorage.getItem("mode") === "true");

  const switchLR = () => {
    setPos(!pos);
  };

  const switchMode = () => {
    setMode(!mode);
  };

  return {
    switchMode,
    switchLR,
    mode,
    pos,
  };
};

export default useSettings;
