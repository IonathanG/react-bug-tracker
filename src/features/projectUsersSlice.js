import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // ProjectsUsers: {},
  // isLoading: {},
  ProjectsUsers: {
    project_01: {
      project_manager_id: "user_01",
      project_team: ["user_02", "user_03"],
    },
    project_02: {
      project_manager_id: "user_01",
      project_team: ["user_02", "user_03"],
    },
  },
};

export const projectsUsersSlice = createSlice({
  name: "projectsUsers",
  initialState,
  reducers: {},
});

//export const { addItem } = usersSlice.actions;
export default projectsUsersSlice.reducer;
