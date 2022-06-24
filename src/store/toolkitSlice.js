import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  book: {},
};

const toolkitSlice = createSlice({
  name: "Slice",
  initialState,
  reducers: {
    setDate(state, action) {
      state.book = action.payload;
    },
  },
});

export const { setDate } = toolkitSlice.actions;

export default toolkitSlice.reducer;
