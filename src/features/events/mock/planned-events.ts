import { PlannedEvent } from "../models";

export const PLANNED_EVENTS: PlannedEvent[] = [
  {
    id: 1,
    title: "Wydarzenie",
    date: new Date(),
    description: "Opis",
    type: {
      id: 1,
      name: "Sport",
    },
    phoneNumber: "999888777",
    email: "email@example.com",
    location: "Rybnik, Plac Wolności",
  },
];
