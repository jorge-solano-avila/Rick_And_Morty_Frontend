import { Season } from "./season";

describe("Season", () => {
  it("should create an instance", () => {
    expect(new Season({
      name: "Season 1",
      code: "S01"
    })).toBeTruthy();
  });
});
