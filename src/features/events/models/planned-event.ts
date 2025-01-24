import { PlannedEventType } from "./planned-event-types";

export type PlannedEvent = {
  id: number;
  title: string;
  eventDateTime: Date;
  description: string;
  imageUrl: string;
  eventType: PlannedEventType;
  contactPhone: string;
  contactEmail: string;
  eventLocation: string;
};
