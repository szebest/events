import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { sleep } from "@/shared/utils";
import { RequestStatus } from "@/shared/models";

import { PlannedEvent } from "../models";
import { PLANNED_EVENTS } from "../mock";
import { RootState } from "@/shared/store";

export const fetchEvents = createAsyncThunk(
  "events-list/fetchEvents",
  async () => {
    await sleep(1000);
    return PLANNED_EVENTS;
  }
);

type EventsState = {
  events: PlannedEvent[];
  status: RequestStatus;
  error: string | null;
};

const initialState: EventsState = {
  events: [],
  status: "idle",
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown Error";
      });
  },
});

export const eventsReducer = eventsSlice.reducer;

export const selectAllEvents = (state: RootState) => state.events.events;

export const selectEventById = (state: RootState, eventId: number) =>
  state.events.events.find((event) => event.id === eventId);

export const selectEventsStatus = (state: RootState) => state.events.status;

export const selectEventsError = (state: RootState) => state.events.error;
