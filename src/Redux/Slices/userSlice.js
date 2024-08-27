import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./userData";

const initialState = {
  users: userData,
};

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
