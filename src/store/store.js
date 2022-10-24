import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "../features/usersSlice";
import ProjectsReducer from "../features/projectsSlice";
import ProjectUsersReducer from "../features/projectUsersSlice";
import ArchivedProjectsReducer from "../features/archivedProjectsSlice";
import MenuReducer from "../features/menuSlice";

const store = configureStore({
  reducer: {
    users: UsersReducer,
    projects: ProjectsReducer,
    projectUsers: ProjectUsersReducer,
    archivedProjects: ArchivedProjectsReducer,
    menu: MenuReducer,
  },
});

export default store;
