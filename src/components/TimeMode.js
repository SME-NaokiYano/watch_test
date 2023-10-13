import Clock from "./Clock";
import LapResetArea from "./LapResetArea";
import Sound from "../../src/ClickSound.mp3";
import "../styles/Clock.css";
import "../styles/List.css";
import { useState, useRef, useEffect } from "react";
import useSound from "use-sound";

const TimeMode = ({
  marks,
  marksDispatch,
  time,
  toggle,
  reset,
  pos,
  isRunning,
  mode,
}) => {
  const bottomRef = useRef(null);
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
  }, [marks]);

  return (
    <div className="Super">
      <div
        style={{
          height: "68vh",
        }}
        onPointerDown={() => {
          play();
          toggle();
          if (isRunning) {
            if (whichTab) {
              marksDispatch({ type: "append1", newLap: time });
            } else {
              marksDispatch({ type: "append2", newLap: time });
            }
            ScrollToBottom();
          }
        }}>
        <div className="Title" style={{ backgroundColor: "#4CD6FF" }}>
          通常モード
        </div>
        <Clock time={time} mode={mode} />
        <div>
          <time className="TimeNum" style={{ color: "#4CD6FF" }}>
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
          </time>
        </div>
      </div>
      <div
        className="Lower"
        style={{
          flexDirection: pos ? "row-reverse" : "row",
        }}>
        <LapResetArea
          laps={marks}
          dispatch={marksDispatch}
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

export default TimeMode;
