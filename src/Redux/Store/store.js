// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../Slices/userSlice";

// export const store = configureStore({
//   reducer: {
//     userInformation: userReducer,
//   },
// });

//Loacl Storage

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/userSlice";

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load state", e);
    return undefined;
  }
};

// Save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (e) {
    console.warn("Could not save state", e);
  }
};

// Create the Redux store
const store = configureStore({
  reducer: {
    userInformation: userReducer,
  },
  preloadedState: loadState(), // Initialize state from local storage
});

// Save the state to local storage whenever it changes
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
