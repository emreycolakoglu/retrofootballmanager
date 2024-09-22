import { PlayerModel } from "@rfm/utility-interfaces";
import {
  IPlayerFormula,
  PlayerPosition,
  PlayerQuality,
  PlayerStyle,
  generatePlayer,
} from "../player";
import { Random } from "@rfm/utility-common";

export function generateStarterFirstTeamSquad(options: {
  nationality?: any;
  firstNames?: string[];
  lastNames?: string[];
}): PlayerModel.GeneratorOutcome[] {
  const formula: IPlayerFormula[] = [
    {
      position: PlayerPosition.GOALKEEPER,
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: PlayerStyle.GOALKEEPER,
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: PlayerPosition.GOALKEEPER,
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: PlayerStyle.GOALKEEPER,
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: PlayerPosition.LEFTBACK,
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.DEFENSIVE_FULLBACK,
        PlayerStyle.OFFENSIVE_FULLBACK,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: PlayerPosition.LEFTBACK,
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.DEFENSIVE_FULLBACK,
        PlayerStyle.OFFENSIVE_FULLBACK,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: PlayerPosition.RIGHTBACK,
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.DEFENSIVE_FULLBACK,
        PlayerStyle.OFFENSIVE_FULLBACK,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: PlayerPosition.RIGHTBACK,
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.DEFENSIVE_FULLBACK,
        PlayerStyle.OFFENSIVE_FULLBACK,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: PlayerPosition.CENTERBACK,
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.PLAYMAKER_DEFENDER,
        PlayerStyle.STRONG_DEFENDER,
        PlayerStyle.QUICK_DEFENDER,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: PlayerPosition.CENTERBACK,
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.PLAYMAKER_DEFENDER,
        PlayerStyle.STRONG_DEFENDER,
        PlayerStyle.QUICK_DEFENDER,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: PlayerPosition.CENTERBACK,
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.PLAYMAKER_DEFENDER,
        PlayerStyle.STRONG_DEFENDER,
        PlayerStyle.QUICK_DEFENDER,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: PlayerPosition.CENTERBACK,
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.PLAYMAKER_DEFENDER,
        PlayerStyle.STRONG_DEFENDER,
        PlayerStyle.QUICK_DEFENDER,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: PlayerPosition.RIGHTMIDFIELD,
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.DRIBBLER,
        PlayerStyle.OFFENSIVE_FULLBACK,
        PlayerStyle.DEFENSIVE_FULLBACK,
        PlayerStyle.PLAYMAKER,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: PlayerPosition.RIGHTMIDFIELD,
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.DRIBBLER,
        PlayerStyle.OFFENSIVE_FULLBACK,
        PlayerStyle.DEFENSIVE_FULLBACK,
        PlayerStyle.PLAYMAKER,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: PlayerPosition.LEFTMIDFIELD,
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.DRIBBLER,
        PlayerStyle.OFFENSIVE_FULLBACK,
        PlayerStyle.DEFENSIVE_FULLBACK,
        PlayerStyle.PLAYMAKER,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: PlayerPosition.LEFTMIDFIELD,
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.DRIBBLER,
        PlayerStyle.OFFENSIVE_FULLBACK,
        PlayerStyle.DEFENSIVE_FULLBACK,
        PlayerStyle.PLAYMAKER,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: Random.getRandomInArray([
        PlayerPosition.CENTERMIDFIELD,
        PlayerPosition.ATTACKINGMIDFIELD,
        PlayerPosition.DEFENSIVEMIDFIELD,
      ]),
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.DRIBBLER,
        PlayerStyle.PLAYMAKER,
        PlayerStyle.BOX_2_BOX,
        PlayerStyle.HARD_WORKING_MID,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: Random.getRandomInArray([
        PlayerPosition.CENTERMIDFIELD,
        PlayerPosition.ATTACKINGMIDFIELD,
        PlayerPosition.DEFENSIVEMIDFIELD,
      ]),
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.DRIBBLER,
        PlayerStyle.PLAYMAKER,
        PlayerStyle.BOX_2_BOX,
        PlayerStyle.HARD_WORKING_MID,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: Random.getRandomInArray([
        PlayerPosition.CENTERMIDFIELD,
        PlayerPosition.ATTACKINGMIDFIELD,
        PlayerPosition.DEFENSIVEMIDFIELD,
      ]),
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.DRIBBLER,
        PlayerStyle.PLAYMAKER,
        PlayerStyle.BOX_2_BOX,
        PlayerStyle.HARD_WORKING_MID,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: Random.getRandomInArray([
        PlayerPosition.CENTERMIDFIELD,
        PlayerPosition.ATTACKINGMIDFIELD,
        PlayerPosition.DEFENSIVEMIDFIELD,
      ]),
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.DRIBBLER,
        PlayerStyle.PLAYMAKER,
        PlayerStyle.BOX_2_BOX,
        PlayerStyle.HARD_WORKING_MID,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: Random.getRandomInArray([
        PlayerPosition.FORWARD,
        PlayerPosition.STRIKER,
      ]),
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.FORWARD,
        PlayerStyle.POACHER,
        PlayerStyle.STRIKER,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: Random.getRandomInArray([
        PlayerPosition.FORWARD,
        PlayerPosition.STRIKER,
      ]),
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.FORWARD,
        PlayerStyle.POACHER,
        PlayerStyle.STRIKER,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: Random.getRandomInArray([
        PlayerPosition.FORWARD,
        PlayerPosition.STRIKER,
      ]),
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.FORWARD,
        PlayerStyle.POACHER,
        PlayerStyle.STRIKER,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
    {
      position: Random.getRandomInArray([
        PlayerPosition.FORWARD,
        PlayerPosition.STRIKER,
      ]),
      quality: Random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: Random.getRandomInArray([
        PlayerStyle.FORWARD,
        PlayerStyle.POACHER,
        PlayerStyle.STRIKER,
      ]),
      ...options,
      ageTemplate: { min: 17, max: 40 },
    },
  ];

  const players: PlayerModel.GeneratorOutcome[] = [];

  formula.map((f) => {
    players.push(generatePlayer(f));
  });

  return players;
}
