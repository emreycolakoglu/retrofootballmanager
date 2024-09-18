import { calculatePlayerPositionLabel } from "./calculatePlayerPositionLabel";
import { PlayerModel } from "@rfm/utility-interfaces";

describe("calculatePlayerPositionLabel", () => {
  it('should return "GK" for goalkeeper position', () => {
    const position: PlayerModel.PlayerPosition = {
      goalkeeper: 20,
      side: { left: 0, center: 20, right: 0 },
      defence: 0,
      defensiveMid: 0,
      midfield: 0,
      attackingMid: 0,
      forward: 0,
    };
    expect(calculatePlayerPositionLabel(position)).toBe("GK");
  });

  it('should return "D" for defence position', () => {
    const position: PlayerModel.PlayerPosition = {
      defence: 20,
      side: { left: 0, center: 20, right: 0 },
      goalkeeper: 0,
      defensiveMid: 0,
      midfield: 0,
      attackingMid: 0,
      forward: 0,
    };
    expect(calculatePlayerPositionLabel(position)).toBe("D C");
  });

  it('should return "DM" for defensive midfielder position', () => {
    const position: PlayerModel.PlayerPosition = {
      defensiveMid: 20,
      side: { left: 0, center: 20, right: 0 },
      goalkeeper: 0,
      defence: 0,
      midfield: 0,
      attackingMid: 0,
      forward: 0,
    };
    expect(calculatePlayerPositionLabel(position)).toBe("DM C");
  });

  it('should return "M" for midfielder position', () => {
    const position: PlayerModel.PlayerPosition = {
      midfield: 20,
      side: { left: 0, center: 20, right: 0 },
      goalkeeper: 0,
      defence: 0,
      defensiveMid: 0,
      attackingMid: 0,
      forward: 0,
    };
    expect(calculatePlayerPositionLabel(position)).toBe("M C");
  });

  it('should return "AM" for attacking midfielder position', () => {
    const position: PlayerModel.PlayerPosition = {
      attackingMid: 20,
      side: { left: 0, center: 20, right: 0 },
      goalkeeper: 0,
      defence: 0,
      defensiveMid: 0,
      midfield: 0,
      forward: 0,
    };
    expect(calculatePlayerPositionLabel(position)).toBe("AM C");
  });

  it('should return "F" for forward position', () => {
    const position: PlayerModel.PlayerPosition = {
      forward: 20,
      side: { left: 0, center: 20, right: 0 },
      goalkeeper: 0,
      defence: 0,
      defensiveMid: 0,
      midfield: 0,
      attackingMid: 0,
    };
    expect(calculatePlayerPositionLabel(position)).toBe("F C");
  });

  it("should return multiple positions", () => {
    const position: PlayerModel.PlayerPosition = {
      defence: 20,
      midfield: 20,
      side: { left: 0, center: 20, right: 0 },
      goalkeeper: 0,
      defensiveMid: 0,
      attackingMid: 0,
      forward: 0,
    };
    expect(calculatePlayerPositionLabel(position)).toBe("D/M C");
  });

  it("should return empty string for no positions", () => {
    const position: PlayerModel.PlayerPosition = {
      side: { left: 0, center: 0, right: 0 },
      goalkeeper: 0,
      defence: 0,
      defensiveMid: 0,
      midfield: 0,
      attackingMid: 0,
      forward: 0,
    };
    expect(calculatePlayerPositionLabel(position)).toBe(" ");
  });

  it("should throw error for invalid input", () => {
    const position: any = "invalid input";
    expect(() => calculatePlayerPositionLabel(position)).toThrowError();
  });
});
