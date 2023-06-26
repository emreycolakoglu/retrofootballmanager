import { PlayerModel } from "@rfm/utility-interfaces";

// TODO convert into translatable strings

export function calculatePlayerPositionName(
  position?: PlayerModel.PlayerPosition
): string {
  if (!position) return "";

  const positions: string[] = [];
  const sides: string[] = [];

  if (position.goalkeeper > 15) {
    positions.push("Goalkeeper");
    return `${positions.join("/")} ${sides.join("")}`;
  }
  if (position.defence > 15) {
    positions.push("Defender");
  }
  if (position.defensiveMid > 15) {
    positions.push("Defensive Midfielder");
  }
  if (position.midfield > 15) {
    positions.push("Midfielder");
  }
  if (position.attackingMid > 15) {
    positions.push("Attacking Midfielder");
  }
  if (position.forward > 15) {
    positions.push("Forward");
  }

  if (position.side.right > 15) {
    sides.push("Right");
  }
  if (position.side.left > 15) {
    sides.push("Left");
  }
  if (position.side.center > 15) {
    sides.push("Center");
  }

  return `${positions.join("/")} (${sides.join("")})`;
}
