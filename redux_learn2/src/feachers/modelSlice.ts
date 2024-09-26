import { createSlice } from "@reduxjs/toolkit";

interface Model {
  modelState: boolean;
}

const initialState: Model = {
  modelState: false,
};

const ModelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    toggleModel: (state) => {
      state.modelState = !state.modelState;
    },
  },
});

export const { toggleModel } = ModelSlice.actions;

export default ModelSlice.reducer;
