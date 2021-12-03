import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./slices/userSlice";
// import dashboardReducer from "./slices/dashboardSlice";
import shopReducer from "./slices/shopSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    // dashboard: dashboardReducer,
  },
});
