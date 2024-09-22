import { generatePlayer } from "./createPlayer";
import { PlayerGenerator } from "./interfaces";

describe("Random player generation", () => {
  it("should work", () => {
    const createdPlayer = generatePlayer({
      ageTemplate: { min: 17, max: 25 },
      position: PlayerGenerator.PlayerPosition.CENTERBACK,
      style: PlayerGenerator.PlayerStyle.STRONG_DEFENDER,
      clubId: "1",
      quality: PlayerGenerator.PlayerQuality.VERYGOOD,
      firstNames: ["John"],
      lastNames: ["Doe"],
    });

    expect(createdPlayer.age).toBeGreaterThanOrEqual(17);
    expect(createdPlayer.age).toBeLessThanOrEqual(25);
    expect(createdPlayer.position.defence).toBeGreaterThanOrEqual(15);
    expect(createdPlayer.position.attackingMid).toBeLessThanOrEqual(5);
    expect(createdPlayer.position.side.center).toBeGreaterThan(15);
    expect(createdPlayer.technical.tackling).toBeGreaterThanOrEqual(5);
  });
});
