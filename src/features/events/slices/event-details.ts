import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { sleep } from "@/shared/utils";
import { RootState } from "@/shared/store";
import { RequestStatus } from "@/shared/models";

import { PlannedEvent } from "../models";
import { selectEventById } from "./events-list";
import { PLANNED_EVENTS } from "../mock";

export const fetchEventById = createAsyncThunk(
  "events-list/fetchEventById",
  async (eventId: number, { getState }) => {
    await sleep(1000);

    // Here should be a /events/${id} request.
    // For demo purposes I decided to get the event details from the store
    // If the data is not in the store, then proceed to get it from the initial planned events mocked data
    // because there is a possibility, where the events data has not yet been loaded into the redux store
    const existingEvent =
      selectEventById(getState() as RootState, eventId) ??
      PLANNED_EVENTS.find((x) => x.id === eventId);

    if (!existingEvent) {
      throw new Error("error");
    }

    return existingEvent;
  }
);

type EventDetailsState = {
  event: PlannedEvent | null;
  status: RequestStatus;
  error: string | null;
};

const initialState: EventDetailsState = {
  event: null,
  status: "idle",
  error: null,
};

const eventDetailsSlice = createSlice({
  name: "eventDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventById.pending, (state, action) => {
        if (action.meta.arg !== state.event?.id) {
          state.event = null;
        }
        state.status = "pending";
      })
      .addCase(fetchEventById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.event = action.payload;
      })
      .addCase(fetchEventById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown Error";
      });
  },
});

export const eventDetailsReducer = eventDetailsSlice.reducer;

export const selectEventDetails = (state: RootState) =>
  state.eventDetails.event;

export const selectEventDetailsStatus = (state: RootState) =>
  state.events.status;

export const selectEventDetailsError = (state: RootState) => state.events.error;
