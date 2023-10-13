import "./App.css";
import StopWatch from "./components/StopWatch";
import useTimer from "./hooks/useTimer";

function App() {
  const { time, toggle, reset, isRunning } = useTimer();

  document.oncontextmenu = function () {
    return false;
  };

  return (
    <div className="App">
      <StopWatch
        time={time}
        toggle={toggle}
        reset={reset}
        isRunning={isRunning}
      />
    </div>
  );
}

export default App;
