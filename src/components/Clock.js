import "../styles/Clock.css";

const Clock = ({ time, mode }) => {
  return (
    <>
      <div className="index">
        <img
          src={`${process.env.PUBLIC_URL}/Stopwatch_Index_dark.png`}
          alt="image_body"
        />

        <img
          className="seconds"
          src={
            mode
              ? `${process.env.PUBLIC_URL}/hand_lap_dark.png`
              : `${process.env.PUBLIC_URL}/hand_default_dark.png`
          }
          alt="image_pointer"
          style={{
            transform: `rotate(${time * 60}deg)`,
            transformOrigin: "50% 97.6%",
            height: "51%",
            width: "auto",
          }}
        />
      </div>
    </>
  );
};

export default Clock;
