import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import habitReducer from "./habitSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    habit: habitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
