import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Projects: {},
  isLoading: false,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    dbUpdateProjects: (state, { payload }) => {
      state.Projects = payload;
    },
  },
});

export const { dbUpdateProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
