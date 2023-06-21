import { PlayerModel } from "@rfm/utility-interfaces";

export function calculatePlayerPositionLabel(
  position: PlayerModel.Position
): string {
  const positions: string[] = [];
  const sides: string[] = [];

  if (position.goalkeeper > 15) {
    positions.push("GK");
    return `${positions.join("/")} ${sides.join("")}`;
  }
  if (position.defence > 15) {
    positions.push("D");
  }
  if (position.defensiveMid > 15) {
    positions.push("DM");
  }
  if (position.midfield > 15) {
    positions.push("M");
  }
  if (position.attackingMid > 15) {
    positions.push("AM");
  }
  if (position.forward > 15) {
    positions.push("F");
  }

  if (position.side.right > 15) {
    sides.push("R");
  }
  if (position.side.left > 15) {
    sides.push("L");
  }
  if (position.side.center > 15) {
    sides.push("C");
  }

  return `${positions.join("/")} ${sides.join("")}`;
}
