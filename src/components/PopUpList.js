import { useEffect, useState } from "react";
import Lap from "./Lap";
import List from "./List";
import Close from "./Close";
import useWindowSize from "../hooks/useWindowSize";
import "../styles/PopUp.css";

const PopUpList = ({ popupFlg, onClick, laps, id, mode, whichTab }) => {
  const [Tab, setTab] = useState(whichTab);
  const [windowWidth, windowHeight] = useWindowSize();
  const header = windowHeight * 0.045;

  useEffect(() => {
    setTab(whichTab);
  }, [whichTab]);

  const record = [];

  const lap1 = laps.filter((lap) => {
    return lap.list == 1;
  });

  const lap2 = laps.filter((lap) => {
    return lap.list == 2;
  });

  if (popupFlg) {
    return (
      <div className="pop">
        <div className="inside">
          <div className="tab" style={{ height: header }}>
            <div
              className="header"
              style={{
                backgroundColor: Tab ? "#433F47" : "#343039",
                color: "#FFFFFF",
              }}
              onPointerDown={() => {
                setTab(true);
              }}>
              1
            </div>
            <div
              className="header"
              style={{
                backgroundColor: !Tab ? "#433F47" : "#343039",
                color: "#FFFFFF",
              }}
              onPointerDown={() => {
                setTab(false);
              }}>
              2
            </div>
          </div>

          <div className="table">
            <ol className="ol">
              {(Tab ? lap1 : lap2).map((lap, index) => {
                let prev = "";
                record.push(lap.lap.time);
                prev = index !== 0 ? record[index - 1] : null;

                return (
                  <li className="data">
                    <span>
                      <div className="Lrecord">
                        <Lap {...lap.lap} prev={prev} />
                      </div>
                      <div className="Rrecord">
                        <List {...lap.lap} />
                      </div>
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
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

export default PopUpList;
