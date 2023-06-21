import { PlayerModel } from "@rfm/utility-interfaces";

export function calculatePlayerNameLabel(player: PlayerModel.Base) {
  return `${player.lastName}, ${player.firstName[0]}`;
}
