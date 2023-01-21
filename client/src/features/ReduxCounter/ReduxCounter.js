import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

function ReduxCounter() {

  // DELETE THIS LINE
  const counter = 0;

  // TODO #7: create a hook to access dispatch function


  // TODO #8: retrieve the current counter state



  const incrementCounter = () => {
    // TODO #9: use dispatch to increment the counter

  };

  const decrementCounter = () => {
    // TODO #10: use dispatch to decrement the counter

  };

  return (
    <div className="counter-content">
      <h2>Redux Counter&nbsp;&#128216;</h2>
      <button onClick={incrementCounter}>&#10133;</button>
      <h1>{counter}</h1>
      <button onClick={decrementCounter}>&#10134;</button>
    </div>
  );
}

export default ReduxCounter;
