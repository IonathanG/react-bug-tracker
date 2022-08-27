import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/usersSlice";

const store = configureStore({
  reducer: {
    cart: UserReducer,
  },
});

export default store;
