import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { eventDetailsReducer, eventsReducer } from "@/features/events/slices";

const store = configureStore({
  reducer: {
    events: eventsReducer,
    eventDetails: eventDetailsReducer,
  },
});

export default store;

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
