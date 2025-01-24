import { UploadedImage } from "./uploaded-image";

export type PlannedEventFormModel = {
  title: string;
  eventDateTime: Date;
  description: string;
  image: UploadedImage;
  eventTypeId: number | null;
  contactPhone: string;
  contactEmail: string;
  eventLocation: string;
};
