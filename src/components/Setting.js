import "../styles/Setting.css";
import { useState } from "react";
import Close from "./Close";

const Setting = ({
  settingFlg,
  onClick,
  switchMode,
  switchLR,
  reset,
  lapsDispatch,
  marksDispatch,
}) => {
  const [localPos, setLocalPos] = useState(
    localStorage.getItem("pos") === "true"
  );
  const [localMode, setLocalMode] = useState(
    localStorage.getItem("mode") === "true"
  );
  const verStr = "Ver.";
  const verNum = "1.0.0";

  if (settingFlg) {
    return (
      <div className="overlay">
        <div className="content">
          <p className="TitleText">設定</p>
          <p className="MenuText1">
            Lapモード
            <label className="toggle-button-001">
              <input
                type="checkbox"
                checked={localMode}
                name="mode"
                onChange={(e) => {
                  switchMode();
                  localStorage.setItem("mode", e.target.checked);
                  setLocalMode(e.target.checked);
                  reset();
                  lapsDispatch({ type: "resetAll" });
                  marksDispatch({ type: "resetAll" });
                }}
              />
            </label>
          </p>
          <p className="MenuText2">
            RESETボタン左右反転
            <label className="toggle-button-001">
              <input
                type="checkbox"
                checked={localPos}
                name="pos"
                onChange={(e) => {
                  switchLR();
                  localStorage.setItem("pos", e.target.checked);
                  setLocalPos(e.target.checked);
                }}
              />
            </label>
          </p>
          <p className="Ver">
            {verStr}
            {verNum}
          </p>
          <div className="CloseArea">
            <Close onClick={onClick} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Setting;
