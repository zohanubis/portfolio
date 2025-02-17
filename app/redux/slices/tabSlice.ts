import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TabState {
  activeTabs: Record<number, string | null>;
  activeTimeline: number | null;
}

const initialState: TabState = {
  activeTabs: {},
  activeTimeline: null,
};

const tabSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setActiveTab: (state, { payload: { index, tab } }: PayloadAction<{ index: number; tab: string | null }>) => {
      state.activeTabs[index] = tab;
    },
    setActiveTimeline: (state, { payload }: PayloadAction<number | null>) => {
      state.activeTimeline = payload;
    },
  },
});

export const { setActiveTab, setActiveTimeline } = tabSlice.actions;
export default tabSlice.reducer;
