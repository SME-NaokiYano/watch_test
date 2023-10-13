import List from "./List";
import PopUpList from "./PopUpList";
import Lap from "./Lap";
import "../styles/List.css";

const TimeList = ({
  laps,
  id,
  popupFlg,
  ListClose,
  bottomRef,
  mode,
  whichTab,
}) => {
  const timeContent = [];
  const record = [];
  const lapContent = [];

  const filteredLaps = laps.filter(function (lap) {
    return lap.list == id;
  });

  return (
    <>
      <ol className="row" id={id}>
        {filteredLaps.map((lap, index) => {
          let prev = "";
          record.push(lap.lap.time);
          timeContent.push(
            <li key={lap.lap.id}>
              <List {...lap.lap} />
            </li>
          );
          prev = index !== 0 ? record[index - 1] : null;
          lapContent.push(
            <li key={lap.lap.id}>
              <Lap {...lap.lap} prev={prev} />
            </li>
          );
          return (
            <li key={lap.lap.id} className="li">
              <span>
                <List {...lap.lap} />
                <div ref={bottomRef} />
              </span>
            </li>
          );
        })}
      </ol>
      <PopUpList
        id={id}
        popupFlg={popupFlg}
        onClick={ListClose}
        laps={laps}
        mode={mode}
        whichTab={whichTab}
      />
    </>
  );
};

export default TimeList;
