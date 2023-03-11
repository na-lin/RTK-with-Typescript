import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../state";
import { increase, descrease, update } from "../state/slices/counterSlice";

const Counter = () => {
  const [value, setValue] = useState(0);
  // const { count } = useSelector((state) => state.counter);
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch: AppDispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase());
  };
  const handleDecrease = () => {
    dispatch(descrease());
  };
  const handleUpdate = () => {
    dispatch(update(value));
    setValue(0);
  };

  return (
    <div>
      <h3>Counter</h3>
      <p>{count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Descrease</button>
      <br />
      <input
        value={value || ""}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Counter;
