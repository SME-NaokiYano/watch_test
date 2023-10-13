import useSettings from "../hooks/useSettings";
import LapMode from "./LapMode";
import useLaps from "../hooks/useLaps";
import TimeMode from "./TimeMode";
import "../styles/List.css";
import "../styles/Clock.css";
import { createContext, useState } from "react";
import "../styles/PopUp.css";
import Setting from "./Setting";
import useWatch from "../hooks/useWatch";

export const Context = createContext();

const StopWatch = ({ time, toggle, reset, isRunning }) => {
  const [settingFlg, setSettingFlg] = useState(false);
  const { switchMode, switchLR, mode, pos } = useSettings();
  const { laps, lapsDispatch } = useLaps();
  const { marks, marksDispatch } = useWatch();

  const SettingClose = () => {
    setSettingFlg(false);
  };

  return (
    <div>
      <div
        onClick={(e) => {
          if (!isRunning) {
            e.stopPropagation();
            setSettingFlg(true);
          }
        }}
        className="SettingBtn">
        <img
          src={`${process.env.PUBLIC_URL}/Icon_Setting_dark.png`}
          alt="image_Setting"
        />
      </div>
      <div className="Clock">
        <center>
          {mode ? (
            <LapMode
              laps={laps}
              lapsDispatch={lapsDispatch}
              time={time}
              toggle={toggle}
              reset={reset}
              pos={pos}
              isRunning={isRunning}
              mode={mode}
            />
          ) : (
            <TimeMode
              marks={marks}
              marksDispatch={marksDispatch}
              time={time}
              toggle={toggle}
              reset={reset}
              pos={pos}
              isRunning={isRunning}
              mode={mode}
            />
          )}
        </center>
      </div>
      {settingFlg && (
        <Setting
          settingFlg={settingFlg}
          onClick={SettingClose}
          switchLR={switchLR}
          switchMode={switchMode}
          reset={reset}
          lapsDispatch={lapsDispatch}
          marksDispatch={marksDispatch}
        />
      )}
    </div>
  );
};

export default StopWatch;
