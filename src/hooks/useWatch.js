import { useReducer } from "react";

const reducer = (laps, { type, newLap }) => {
  var result = [];
  switch (type) {
    // case "append":
    //   return [...marks, { id: marks.length, time: newLap }];
    // case "reset":
    //   return [];
    case "append1":
      return [...laps, { list: 1, lap: { id: laps.length, time: newLap } }];
    case "append2":
      return [...laps, { list: 2, lap: { id: laps.length, time: newLap } }];
    case "reset1":
      result = laps.filter(function (lap) {
        return lap.list !== 1;
      });
      return [...result];
    case "reset2":
      result = laps.filter(function (lap) {
        return lap.list !== 2;
      });
      return [...result];
    case "resetAll":
      result = "";
      return [...result];
    default:
      console.log("type", type);
      throw new Error("不明なactionです。");
  }
};

const useWatch = () => {
  const [marks, marksDispatch] = useReducer(reducer, []);

  return { marks, marksDispatch };
};
export default useWatch;
