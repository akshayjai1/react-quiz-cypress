import { createSlice } from "@reduxjs/toolkit";

const inc = createSlice({
  initialState: 0,
  name: "inc",
  reducers: {
    increment: (state, action) => {
      console.log("incrementing");
      state += 1;
      debugger;
      return state;
    },
    incrementAsync: (state, action) => {
      console.log("in incrementAsync reducer");
      debugger;
      return state;
    },
  },
});
export const { actions, reducer } = inc;
export const { increment, incrementAsync } = actions;
