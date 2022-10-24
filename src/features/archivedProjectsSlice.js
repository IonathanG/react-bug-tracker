import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ArchivedProjects: {},
  isLoading: false,
};

export const archivedProjectsSlice = createSlice({
  name: "archivedProjects",
  initialState,
  reducers: {
    dbUpdateArchivedProjects: (state, { payload }) => {
      state.ArchivedProjects = payload;
    },
  },
});

export const { dbUpdateArchivedProjects } = archivedProjectsSlice.actions;
export default archivedProjectsSlice.reducer;
