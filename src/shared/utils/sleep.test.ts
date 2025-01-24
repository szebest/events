import { describe, it, expect, vi } from "vitest";

import { sleep } from "./sleep";

describe("sleep", () => {
  it("should resolve after the specified time", async () => {
    const ms = 1000;
    const startTime = Date.now();

    await sleep(ms);

    const endTime = Date.now();
    const elapsed = endTime - startTime;

    expect(elapsed).toBeGreaterThanOrEqual(ms);
    expect(elapsed).toBeLessThan(ms + 50);
  });

  it("should default to 500ms if no parameter is passed", async () => {
    const startTime = Date.now();

    await sleep();

    const endTime = Date.now();
    const elapsed = endTime - startTime;

    expect(elapsed).toBeGreaterThanOrEqual(500);
    expect(elapsed).toBeLessThan(550);
  });

  it("should call setTimeout with the correct delay", () => {
    const spy = vi.spyOn(globalThis, "setTimeout");

    sleep(200);

    expect(spy).toHaveBeenCalledWith(expect.any(Function), 200);

    spy.mockRestore();
  });
});
