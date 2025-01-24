import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "@/shared/store";
import { sleep } from "@/shared/utils";
import { RequestStatus } from "@/shared/models";

import { AddPlannedEventRequest, PlannedEvent } from "../models";
import { EVENT_TYPES, PLANNED_EVENTS } from "../mock";

export const fetchEvents = createAsyncThunk(
  "events-list/fetchEvents",
  async () => {
    await sleep(1000);
    return PLANNED_EVENTS;
  }
);

export const addEvent = createAsyncThunk(
  "events-list/addEvent",
  async (event: AddPlannedEventRequest, { getState }) => {
    await sleep(1000);

    // Get all the possible events and calculate the max id
    // the added event's id will be the next free id
    // this is done for demo purpose
    // the id should of the object should be returned by the backend
    const possibleEventIds = [
      ...selectAllEvents(getState() as RootState),
      ...PLANNED_EVENTS,
    ].map((x) => x.id);
    const maxId = Math.max(...possibleEventIds);
    const nextId = maxId + 1;

    // Get the event type id and return the actual eventType object
    // As above, this should be done on the backend
    // Just for demo purpose
    const { eventTypeId, ...rest } = event;
    const eventType =
      EVENT_TYPES.find((x) => x.id === eventTypeId) ?? EVENT_TYPES[0];

    const eventToBeAdded: PlannedEvent = { id: nextId, eventType, ...rest };

    return eventToBeAdded;
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
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        // If data has been loaded, then add it to the redux store
        if (state.status === "succeeded") {
          state.events.push(action.payload);
        }
        // Always update the planned events array
        // It acts like an database
        PLANNED_EVENTS.push(action.payload);
      });
  },
});

export const eventsReducer = eventsSlice.reducer;

export const selectAllEvents = (state: RootState) => state.events.events;

export const selectEventById = (state: RootState, eventId: number) =>
  state.events.events.find((event) => event.id === eventId);

export const selectEventsStatus = (state: RootState) => state.events.status;

export const selectEventsError = (state: RootState) => state.events.error;
