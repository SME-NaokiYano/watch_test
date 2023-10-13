import Clock from "./Clock";
import LapResetArea from "./LapResetArea";
import Sound from "../../src/ClickSound.mp3";
import "../styles/Clock.css";
import "../styles/List.css";
import { useState, useRef, useEffect } from "react";
import useSound from "use-sound";

const LapMode = ({
  laps,
  lapsDispatch,
  time,
  toggle,
  reset,
  pos,
  isRunning,
  mode,
}) => {
  const bottomRef = useRef();
  const [play] = useSound(Sound);
  const [whichTab, setTab] = useState(true);

  const childToParent = (tab) => {
    setTab(tab);
  };

  const ScrollToBottom = () => {
    bottomRef?.current?.scrollIntoView({
      behavior: "smooth",
      inline: "end",
    });
  };

  useEffect(() => {
    ScrollToBottom();
  }, [laps]);

  return (
    <div className="d-flex flex-column Super">
      <div
        style={{ height: "68vh" }}
        onPointerDown={(e) => {
          e.stopPropagation();
          play();
          if (isRunning) {
            if (whichTab) {
              lapsDispatch({ type: "append1", newLap: time });
            } else {
              lapsDispatch({ type: "append2", newLap: time });
            }
            ScrollToBottom();
          } else {
            toggle();
          }
        }}>
        <div>
          <div className="Title" style={{ backgroundColor: "#FFFF00" }}>
            Lapモード
          </div>
          <Clock time={time} mode={mode} />
          <div>
            <div className="TimeNum" style={{ color: "#FFFF00" }}>
              {String(Math.floor((time % 3600) / 60)).padStart(2, "0")}:
              {String(Math.floor(Math.round((time % 60) * 100) / 100)).padStart(
                2,
                "0"
              )}
              +
              {Math.round((time - Math.floor(time)) * 240) / 10 === 24
                ? "00"
                : String(
                    Math.round((time - Math.floor(time)) * 240) / 10
                  ).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
      <div
        className="Lower"
        style={{ flexDirection: pos ? "row-reverse" : "row" }}>
        <LapResetArea
          laps={laps}
          dispatch={lapsDispatch}
          toggle={toggle}
          reset={reset}
          isRunning={isRunning}
          mode={mode}
          childToParent={childToParent}
          bottomRef={bottomRef}
        />
      </div>
    </div>
  );
};

export default LapMode;
