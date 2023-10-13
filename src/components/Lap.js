import "../styles/PopUp.css";
const Lap = ({ time, prev }) => {
  let record = "";
  if (prev === null) {
    record = time;
  } else {
    record = time - prev;
  }

  return (
    <>
      {String(Math.floor((record % 3600) / 60)).padStart(2, "0")}:
      {String(Math.floor(Math.round((record % 60) * 100) / 100)).padStart(
        2,
        "0"
      )}
      +
      {Math.round((record - Math.floor(record)) * 240) / 10 === 24
        ? "00"
        : String(Math.round((record - Math.floor(record)) * 240) / 10).padStart(
            2,
            "0"
          )}
    </>
  );
};

export default Lap;
