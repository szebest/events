import { PlannedEvent } from "../models";
import { EVENT_TYPES } from "./event-types";

export const PLANNED_EVENTS: PlannedEvent[] = [
  {
    id: 1,
    title: "Wydarzenie 1",
    eventDateTime: new Date().toISOString(),
    description: "Opis wydarzenia pierwszego",
    imageUrl:
      "https://c1.wallpaperflare.com/preview/524/222/329/lights-night-dark-christmas.jpg",
    eventType: EVENT_TYPES[0],
    contactPhone: "999888777",
    contactEmail: "email@example.com",
    eventLocation: "Rybnik, Plac Wolności",
  },
  {
    id: 2,
    title: "Wydarzenie 2",
    eventDateTime: new Date().toISOString(),
    description: "Opis wydarzenia drugiego",
    imageUrl:
      "https://c1.wallpaperflare.com/preview/432/775/829/entrance-enter-doorway-night.jpg",
    eventType: EVENT_TYPES[2],
    contactPhone: "777888999",
    contactEmail: "email2@example.com",
    eventLocation: "Rybnik, Plac Wolności",
  },
];
