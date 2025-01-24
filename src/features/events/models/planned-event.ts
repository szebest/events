import { PlannedEventType } from "./planned-event-types";

export type PlannedEvent = {
  id: number;
  title: string;
  eventDateTime: string;
  description: string;
  imageUrl: string;
  eventType: PlannedEventType;
  contactPhone: string;
  contactEmail: string;
  eventLocation: string;
};
