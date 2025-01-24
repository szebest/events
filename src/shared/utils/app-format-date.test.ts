import { describe, expect, it } from "vitest";

import { appFormatDate } from "./app-format-date";

describe("appFormatDate", () => {
  it("should format the date into the correct format", () => {
    const date = new Date(2025, 0, 24, 22, 0).toISOString();
    expect(appFormatDate(date)).toBe("24-01-2025 22:00");
  });
});
