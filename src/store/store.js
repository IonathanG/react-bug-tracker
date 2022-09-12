import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "../features/usersSlice";
import ProjectsReducer from "../features/projectsSlice";
import ProjectsUsersReducer from "../features/projectUsersSlice";
import MenuReducer from "../features/menuSlice";

const store = configureStore({
  reducer: {
    users: UsersReducer,
    projects: ProjectsReducer,
    projectsUsers: ProjectsUsersReducer,
    menu: MenuReducer,
  },
});

export default store;
