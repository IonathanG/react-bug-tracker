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

// ProjectUsers: {
//   project_01: {
//     project_manager_id: "user_02",
//     project_team_id: ["user_01", "user_03"],
//   },
//   project_02: {
//     project_manager_id: "user_01",
//     project_team_id: ["user_02", "user_03"],
//   },
//   project_03: {
//     project_manager_id: "user_01",
//     project_team_id: ["user_02", "user_03"],
//   },
//   project_04: {
//     project_manager_id: "user_01",
//     project_team_id: ["user_02", "user_03"],
//   },
//   project_05: {
//     project_manager_id: "user_01",
//     project_team_id: ["user_02", "user_03"],
//   },
//   project_06: {
//     project_manager_id: "user_01",
//     project_team_id: ["user_02", "user_03"],
//   },
//   project_07: {
//     project_manager_id: "user_01",
//     project_team_id: ["user_02", "user_03"],
//   },
//   project_08: {
//     project_manager_id: "user_01",
//     project_team_id: ["user_02", "user_03"],
//   },
//   project_09: {
//     project_manager_id: "user_01",
//     project_team_id: ["user_02", "user_03"],
//   },
//   project_10: {
//     project_manager_id: "user_01",
//     project_team_id: ["user_03"],
//   },
//   project_11: {
//     project_manager_id: "user_01",
//     project_team_id: ["user_02", "user_03"],
//   },
//   project_12: {
//     project_manager_id: "user_01",
//     project_team_id: ["user_02"],
//   },
// },
