import { createSlice } from "@reduxjs/toolkit";

interface theme {
  DarkTheme: boolean;
}

const initialState: theme = {
  DarkTheme: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogleTheme: (state) => {
      state.DarkTheme = !state.DarkTheme;
    },
  },
});

export const { toogleTheme } = themeSlice.actions;

export default themeSlice.reducer;
