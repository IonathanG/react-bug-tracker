import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Users: {},
  isLoading: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    dbUpdateUsers: (state, { payload }) => {
      state.Users = payload;
    },
  },
});

export const { dbUpdateUsers } = usersSlice.actions;
export default usersSlice.reducer;
