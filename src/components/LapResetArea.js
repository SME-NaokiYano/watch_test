import { useState } from "react";
import Sound from "../../src/ClickSound.mp3";
import "../styles/List.css";
import TimeList from "./TimeList";
import LapList from "./LapList";
import useSound from "use-sound";

const LapResetArea = ({
  laps,
  dispatch,
  toggle,
  reset,
  isRunning,
  mode,
  childToParent,
  bottomRef,
}) => {
  const [play] = useSound(Sound);
  const [whichTab, setTab] = useState(true);
  const [popupFlg, setPopupFlg] = useState(false);
  const [BGcolor, setBGcolor] = useState("#FF270033");
  const ListClose = () => {
    setPopupFlg(false);
  };

  return (
    <>
      {/* ResetArea */}
      {mode ? (
        // LapMode
        isRunning ? (
          <div
            className="Reset"
            onPointerDown={() => {
              if (isRunning) {
                play();
                toggle();
              }
              setBGcolor("#FF270033");
            }}
            onPointerUp={() => setBGcolor("#FF2700")}
            style={{ backgroundColor: BGcolor }}>
            STOP
          </div>
        ) : (
          <div
            className="Reset"
            onPointerDown={() => {
              reset();
              if (whichTab) {
                dispatch({ type: "reset2" });
              } else {
                dispatch({ type: "reset1" });
              }
              childToParent(!whichTab);
              setTab(!whichTab);
              play();
              setBGcolor("#FF270099");
            }}
            onPointerUp={() => setBGcolor("#FF270033")}
            style={{ backgroundColor: BGcolor }}>
            RESET
          </div>
        )
      ) : (
        // TimeMode
        <div
          className="Reset"
          onPointerDown={() => {
            play();
            reset();
            if (whichTab) {
              dispatch({ type: "reset2" });
            } else {
              dispatch({ type: "reset1" });
            }
            childToParent(!whichTab);
            setTab(!whichTab);
            setBGcolor("#FF270099");
          }}
          onPointerUp={() => setBGcolor("#FF270033")}
          style={{ backgroundColor: BGcolor }}>
          RESET
        </div>
      )}
      {/* LapArea */}
      <div className="List">
        <div className="Tab">
          <div
            className="TabHeader"
            style={{
              backgroundColor: whichTab ? "#433F47" : "#343039",
            }}
            onPointerDown={(e) => {
              if (!isRunning) {
                e.stopPropagation();
                childToParent(true);
                setTab(true);
                localStorage.setItem("tab", true);
              }
            }}>
            1
          </div>
          <div
            className="TabHeader"
            style={{
              backgroundColor: !whichTab ? "#433F47" : "#343039",
            }}
            onPointerDown={(e) => {
              if (!isRunning) {
                e.stopPropagation();
                childToParent(false);
                setTab(false);
                localStorage.setItem("tab", false);
              }
            }}>
            2
          </div>
        </div>
        <div
          className="TapArea"
          onClick={
            isRunning
              ? null
              : (e) => {
                  e.stopPropagation();
                  setPopupFlg(true);
                }
          }>
          <div className="box">
            {whichTab ? (
              <>
                {mode ? (
                  <LapList
                    laps={laps}
                    popupFlg={popupFlg}
                    ListClose={ListClose}
                    bottomRef={bottomRef}
                    mode={mode}
                    whichTab={whichTab}
                    id="1"
                  />
                ) : (
                  <TimeList
                    laps={laps}
                    popupFlg={popupFlg}
                    ListClose={ListClose}
                    bottomRef={bottomRef}
                    mode={mode}
                    whichTab={whichTab}
                    id="1"
                  />
                )}
              </>
            ) : (
              <>
                {mode ? (
                  <LapList
                    laps={laps}
                    popupFlg={popupFlg}
                    ListClose={ListClose}
                    bottomRef={bottomRef}
                    mode={mode}
                    whichTab={whichTab}
                    id="2"
                  />
                ) : (
                  <TimeList
                    laps={laps}
                    popupFlg={popupFlg}
                    ListClose={ListClose}
                    bottomRef={bottomRef}
                    mode={mode}
                    whichTab={whichTab}
                    id="2"
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LapResetArea;
