import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/userSlice";

export const store = configureStore({
  reducer: {
    userInformation: userReducer,
  },
});
