import "../styles/PopUp.css";
const List = ({ time }) => {
  return (
    <>
      {String(Math.floor((time % 3600) / 60)).padStart(2, "0")}:
      {String(Math.floor(Math.round((time % 60) * 100) / 100)).padStart(2, "0")}
      +
      {Math.round((time - Math.floor(time)) * 240) / 10 === 24
        ? "00"
        : String(Math.round((time - Math.floor(time)) * 240) / 10).padStart(
            2,
            "0"
          )}
    </>
  );
};

export default List;
