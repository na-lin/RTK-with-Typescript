import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state";
import { increase, descrease } from "../state/slices/counterSlice";

const Counter = () => {
  // const { count } = useSelector((state) => state.counter);
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase());
  };
  const handleDecrease = () => {
    dispatch(descrease());
  };

  return (
    <div>
      <h3>Counter</h3>
      <p>{count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Descrease</button>
    </div>
  );
};

export default Counter;
