import { useState } from "react";
import "../../styles/counter.css";

function ReactCounter() {

  // TODO #1: make an integer counter with react state
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {

    // TODO #2: increment the counter
    setCounter(counter + 1);
  };

  const decrementCounter = () => {

    // TODO #3: decrement the counter (if it is less than 1, return)
    if (counter < 1) return;
    setCounter(counter - 1);
  };

  return (
    <div className="counter-content">
      <h2>React Counter&nbsp;&#128215;</h2>
      <button onClick={incrementCounter}>&#10133;</button>
      <h1>{counter}</h1><button onClick={decrementCounter}>&#10134;</button>
    </div>
  );
}

export default ReactCounter;
