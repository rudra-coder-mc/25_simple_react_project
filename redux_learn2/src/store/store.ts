import { configureStore } from "@reduxjs/toolkit";
import ModelReducer from "../feachers/modelSlice";

const store = configureStore({
  reducer: {
    Model: ModelReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
