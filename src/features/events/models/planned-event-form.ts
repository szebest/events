import { PlannedEvent } from "./planned-event";
import { UploadedImage } from "./uploaded-image";

export type PlannedEventFormModel = Omit<
  PlannedEvent,
  "id" | "eventType" | "imageUrl"
> & {
  eventTypeId: number;
  image: UploadedImage;
};
