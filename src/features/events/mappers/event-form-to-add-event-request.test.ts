import { describe, it, expect, beforeEach } from "vitest";

import { eventFormToAddEventRequestMapper } from "./event-form-to-add-event-request";

describe("eventFormToAddEventRequestMapper", () => {
  let baseInput = {
    image: { file: new File([], ""), url: "https://example.com/image.jpg" },
    eventDateTime: new Date("2025-01-24T10:00:00.000Z"),
    eventTypeId: 1,
    title: "Sample Event",
    description: "A description of the event",
    contactPhone: "999999999",
    contactEmail: "example@example.com",
    eventLocation: "location",
  };

  beforeEach(() => {
    baseInput = {
      image: { file: new File([], ""), url: "https://example.com/image.jpg" },
      eventDateTime: new Date("2025-01-24T10:00:00.000Z"),
      eventTypeId: 1,
      title: "Sample Event",
      description: "A description of the event",
      contactPhone: "999999999",
      contactEmail: "example@example.com",
      eventLocation: "location",
    };
  });

  it("should map input correctly to AddPlannedEventRequest", () => {
    const expectedOutput = {
      imageUrl: "https://example.com/image.jpg",
      eventDateTime: "2025-01-24T10:00:00.000Z",
      eventTypeId: 1,
      title: "Sample Event",
      description: "A description of the event",
      contactPhone: "999999999",
      contactEmail: "example@example.com",
      eventLocation: "location",
    };

    const result = eventFormToAddEventRequestMapper(baseInput);

    expect(result).toEqual(expectedOutput);
  });

  it("should throw an error if image is missing", () => {
    expect(() =>
      eventFormToAddEventRequestMapper({ ...baseInput, image: null })
    ).toThrowError();
  });

  it("should throw an error if eventTypeId is null", () => {
    expect(() =>
      eventFormToAddEventRequestMapper({ ...baseInput, eventTypeId: null })
    ).toThrowError();
  });
});
