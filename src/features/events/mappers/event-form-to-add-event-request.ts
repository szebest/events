import { AddPlannedEventRequest, PlannedEventFormModel } from "../models";

export function eventFormToAddEventRequestMapper(
  input: PlannedEventFormModel
): AddPlannedEventRequest {
  if (!input.image || input.eventTypeId === null) throw new Error();

  const {
    image: { url: imageUrl },
    eventDateTime,
    eventTypeId,
    ...rest
  } = input;

  return {
    imageUrl,
    eventTypeId,
    eventDateTime: eventDateTime.toString(),
    ...rest,
  };
}
