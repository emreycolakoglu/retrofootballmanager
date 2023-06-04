import { generatePlayer } from "./playerGenerator";
import { PlayerPosition, PlayerQuality, PlayerStyle } from "./interfaces";

describe("Random player generation", () => {
  it("should work", () => {
    const createdPlayer = generatePlayer({
      nationality: {
        name: "Türkiye",
        alpha2Code: "TR",
        alpha3Code: "TRY",
        availableToPlay: true,
        continentId: 0,
        prestige: 500,
      },
      ageTemplate: { min: 17, max: 25 },
      position: PlayerPosition.CENTERBACK,
      style: PlayerStyle.STRONG_DEFENDER,
      clubId: "1",
      quality: PlayerQuality.VERYGOOD,
    });

    expect(createdPlayer.age).toBeGreaterThanOrEqual(17);
    expect(createdPlayer.age).toBeLessThanOrEqual(25);
    expect(createdPlayer.nationality).toBe("Türkiye");
    expect(createdPlayer.position.defence).toBeGreaterThanOrEqual(15);
    expect(createdPlayer.position.attackingMid).toBeLessThanOrEqual(5);
    expect(createdPlayer.position.side.center).toBeGreaterThan(15);
    expect(createdPlayer.technical.tackling).toBeGreaterThanOrEqual(5);
  });
});
