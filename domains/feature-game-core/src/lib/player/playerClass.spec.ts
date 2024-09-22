import { generatePlayer, PlayerGenerator } from "@rfm/feature-create-game";
import { Player } from "./playerClass";

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

    const player = new Player(createdPlayer);

    expect(player.age).toBeGreaterThanOrEqual(17);
    expect(player.age).toBeLessThanOrEqual(25);
    expect(player.position.defence).toBeGreaterThanOrEqual(15);
    expect(player.position.attackingMid).toBeLessThanOrEqual(5);
    expect(player.position.side.center).toBeGreaterThan(15);
    expect(player.technical.tackling).toBeGreaterThanOrEqual(5);
    expect(["D C", "D/DM C"]).toContain(player.positionString);
  });
});
