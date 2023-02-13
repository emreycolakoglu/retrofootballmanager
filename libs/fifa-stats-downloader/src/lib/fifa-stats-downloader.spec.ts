import { fifaStatsDownloader } from "./fifa-stats-downloader";

describe("fifaStatsDownloader", () => {
  it("should work", () => {
    expect(fifaStatsDownloader()).toEqual("fifa-stats-downloader");
  });
});
