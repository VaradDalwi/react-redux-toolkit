import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { increment, decrement, reset } from "./counter/slice";

function App() {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>React Redux Demo</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}

export default App;
