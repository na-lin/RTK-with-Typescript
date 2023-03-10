import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state) {
      state.count += 1;
    },
    descrease(state) {
      state.count -= 1;
    },
    increaseBy(state, action) {
      state.count += action.payload;
    },
    descreaseBy(state, action) {
      state.count -= action.payload;
    },
  },
});

export const { increase, descrease, increaseBy, descreaseBy } = counter.actions;
export default counter.reducer;
