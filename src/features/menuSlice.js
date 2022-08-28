import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenu: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    closeMenu: (state) => {
      state.showMenu = false;
    },
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
  },
});

export const { closeMenu, toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
