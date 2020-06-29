import { createSlice } from "@reduxjs/toolkit";

// The initial state of the HackerNews component
export const initialState = {
  data: [],
  loading: false,
  error: false,
};

const hackerNewsArticlesSlice = createSlice({
  name: "hackerNewsArticles",
  initialState,
  reducers: {
    fetch(state) {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    fetchSuccess(state, action) {
      state.data = action.payload.data;
      state.loading = false;
    },
    fetchFailure(state, action) {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});
export const { name, actions, reducer } = hackerNewsArticlesSlice;
export const { fetch, fetchFailure, fetchSuccess } = actions;
