import { PlayerModel } from "@rfm/utility-interfaces";

export function calculatePlayerNameLabel(player: PlayerModel.Player) {
  return `${player.lastName}, ${player.firstName[0]}`;
}
