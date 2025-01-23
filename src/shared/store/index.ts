import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import eventsReducer from "@/features/events/slices/events-list";

const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});

export default store;

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
