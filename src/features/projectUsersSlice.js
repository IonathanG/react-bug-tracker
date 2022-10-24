import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ProjectUsers: {},
  isLoading: {},
};

export const projectUsersSlice = createSlice({
  name: "projectUsers",
  initialState,
  reducers: {
    dbUpdateProjectUsers: (state, { payload }) => {
      state.ProjectUsers = payload;
    },
  },
});

export const { dbUpdateProjectUsers } = projectUsersSlice.actions;
export default projectUsersSlice.reducer;
