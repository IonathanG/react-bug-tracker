import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/usersSlice";
import MenuReducer from "../features/menuSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    menu: MenuReducer,
  },
});

export default store;
