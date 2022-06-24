import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";

const rootReducer = combineReducers({
  main: toolkitSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
