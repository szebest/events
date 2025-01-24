import { PlannedEvent } from "./planned-event";
import { UploadedImage } from "./uploaded-image";

export type PlannedEventFormModel = Omit<
  PlannedEvent,
  "id" | "eventType" | "imageUrl" | "eventDateTime"
> & {
  eventTypeId: number | null;
  image: UploadedImage;
  eventDateTime: Date;
};
