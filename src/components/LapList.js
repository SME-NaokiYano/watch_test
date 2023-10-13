import Lap from "./Lap";
import PopUpList from "./PopUpList";
import "../styles/List.css";

const LapList = ({
  laps,
  id,
  popupFlg,
  ListClose,
  bottomRef,
  mode,
  whichTab,
}) => {
  const record = [];
  const lapContent = [];
  const timeContent = [];

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
              <Lap {...lap.lap} prev={prev} />
            </li>
          );
          prev = index !== 0 ? record[index - 1] : null;
          lapContent.push(
            <li key={lap.lap.id}>
              <Lap {...lap.lap} prev={prev} />
            </li>
          );
          return (
            <li
              key={lap.lap.id}
              className="li"
              ref={filteredLaps.length - 1 === index ? bottomRef : null}>
              <span>
                <Lap {...lap.lap} prev={prev} />
              </span>
            </li>
          );
        })}
      </ol>
      <PopUpList
        popupFlg={popupFlg}
        onClick={ListClose}
        laps={laps}
        id={id}
        mode={mode}
        whichTab={whichTab}
      />
    </>
  );
};

export default LapList;
