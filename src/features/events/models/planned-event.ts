import { PlannedEventType } from "./planned-event-types";

export type PlannedEvent = {
  id: number;
  title: string;
  eventDateTime: Date;
  description: string;
  image: string;
  eventType: PlannedEventType;
  contactPhone: string;
  contactEmail: string;
  eventLocation: string;
};
