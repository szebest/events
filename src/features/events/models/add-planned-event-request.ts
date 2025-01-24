import { PlannedEvent } from "./planned-event";

export type AddPlannedEventRequest = Omit<PlannedEvent, "id" | "eventType"> & {
  eventTypeId: number;
};
