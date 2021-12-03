import { createSlice } from "@reduxjs/toolkit";

// define initialState

const initialState = {
  dashboard: null,
};

// function to export
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboard: (state, action) => {
      state.dashboard = action.payload;
    },
    unsetDashboard: (state) => {
      state.dashboard = null;
    },
  },
});

export const { setDashboard, unsetDashboard } = dashboardSlice.actions;

// selectors
export const selectDashboard = (state) => state.dashboard.dashboard;

export default dashboardSlice.reducer;
