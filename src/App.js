import { useState } from "react";
import "./index.css";

function App() {
  const [seconds, setSeconds] = useState(1);

  let styles = { animation: `resize ${seconds}s linear both infinite` };

  return (
    <div className="App">
      <div className="timer">
        <h3 onClick={() => setSeconds(seconds + 1)}>-</h3>
        <h1>{seconds}</h1>
        <h3 onClick={() => setSeconds(seconds + 1)}>+</h3>
      </div>
      <div className="meditationBall" style={styles}></div>
    </div>
  );
}

export default App;
