import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
