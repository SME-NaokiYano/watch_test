import "../styles/Close.css";

const Close = ({ onClick }) => {
  return (
    <>
      <div
        className="Close"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}>
        CLOSE
      </div>
    </>
  );
};

export default Close;
