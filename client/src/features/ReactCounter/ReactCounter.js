import { useState } from "react";
import "../../styles/counter.css";

function ReactCounter() {

  // DELETE THIS LINE FIRST
  const counter = 0;

  // TODO #1: make an integer counter with react state


  const incrementCounter = () => {

    // TODO #2: increment the counter

  };

  const decrementCounter = () => {

    // TODO #3: decrement the counter (if it is less than 1, return before decrementing)

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
