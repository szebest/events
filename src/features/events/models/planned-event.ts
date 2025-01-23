import { PlannedEventType } from "./planned-event-types";

export type PlannedEvent = {
  id: number;
  title: string;
  date: Date;
  description: string;
  imageUrl: string;
  type: PlannedEventType;
  phoneNumber: string;
  email: string;
  location: string;
};
