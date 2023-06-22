import { ClubModel, ContractModel, PlayerModel } from "@rfm/utility-interfaces";

export function generatePlayerContractProposal(options: {
  clubPrestige: ClubModel.ClubPrestige;
  playerPrestige: PlayerModel.PlayerPrestige;
}): ContractModel.PlayerContractProposal {
  const diffInLocalPrestige =
    options.playerPrestige.local - options.clubPrestige.local;
  const diffInGlobalPrestige =
    options.playerPrestige.global - options.clubPrestige.global;

  // TODO figure out a way to calculate salary requests

  return {
    durationInYears: 3,
    weeklyWage: 100,
  };
}
