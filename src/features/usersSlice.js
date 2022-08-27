import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Users: {},
  // isLoading: {},
  Users: {
    user_01: {
      user_name: "Tromso One",
      user_email: "tromso1@tromso.com",
      user_password: "tromso123",
      user_role: "Admin",
      user_mobile: "Not Provided",
      user_avatar: "PIC",
      user_inbox: {},
      user_notifications: {},
    },
    user_02: {
      user_name: "Tromso Two",
      user_email: "tromso2@tromso.com",
      user_password: "tromso456",
      user_role: "Project Manager",
      user_mobile: "Not Provided",
      user_avatar: "PIC",
      user_inbox: {},
      user_notifications: {},
    },
    user_03: {
      user_name: "Tromso Three",
      user_email: "tromso3@tromso.com",
      user_password: "tromso789",
      user_role: "Developer",
      user_mobile: "Not Provided",
      user_avatar: "PIC",
      user_inbox: {},
      user_notifications: {},
    },
  },
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

//export const { addItem } = usersSlice.actions;
export default usersSlice.reducer;
