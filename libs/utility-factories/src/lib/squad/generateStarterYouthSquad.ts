import { PlayerModel } from "@rfm/utility-interfaces";
import {
  IPlayerFormula,
  PlayerPosition,
  PlayerQuality,
  PlayerStyle,
  generatePlayer,
} from "../player";
import { random } from "@rfm/utility-common";

export function generateStarterYouthTeamSquad(options: {
  nationality?: any;
  firstNames?: string[];
  lastNames?: string[];
}): PlayerModel.GeneratorOutcome[] {
  const formula: IPlayerFormula[] = [
    {
      position: PlayerPosition.GOALKEEPER,
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: PlayerStyle.GOALKEEPER,
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: PlayerPosition.GOALKEEPER,
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: PlayerStyle.GOALKEEPER,
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: PlayerPosition.LEFTBACK,
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.DEFENSIVE_FULLBACK,
        PlayerStyle.OFFENSIVE_FULLBACK,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: PlayerPosition.LEFTBACK,
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.DEFENSIVE_FULLBACK,
        PlayerStyle.OFFENSIVE_FULLBACK,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: PlayerPosition.RIGHTBACK,
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.DEFENSIVE_FULLBACK,
        PlayerStyle.OFFENSIVE_FULLBACK,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: PlayerPosition.RIGHTBACK,
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.DEFENSIVE_FULLBACK,
        PlayerStyle.OFFENSIVE_FULLBACK,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: PlayerPosition.CENTERBACK,
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.PLAYMAKER_DEFENDER,
        PlayerStyle.STRONG_DEFENDER,
        PlayerStyle.QUICK_DEFENDER,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: PlayerPosition.CENTERBACK,
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.PLAYMAKER_DEFENDER,
        PlayerStyle.STRONG_DEFENDER,
        PlayerStyle.QUICK_DEFENDER,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: PlayerPosition.CENTERBACK,
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.PLAYMAKER_DEFENDER,
        PlayerStyle.STRONG_DEFENDER,
        PlayerStyle.QUICK_DEFENDER,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: PlayerPosition.CENTERBACK,
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.PLAYMAKER_DEFENDER,
        PlayerStyle.STRONG_DEFENDER,
        PlayerStyle.QUICK_DEFENDER,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: PlayerPosition.RIGHTMIDFIELD,
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.DRIBBLER,
        PlayerStyle.OFFENSIVE_FULLBACK,
        PlayerStyle.DEFENSIVE_FULLBACK,
        PlayerStyle.PLAYMAKER,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: PlayerPosition.RIGHTMIDFIELD,
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.DRIBBLER,
        PlayerStyle.OFFENSIVE_FULLBACK,
        PlayerStyle.DEFENSIVE_FULLBACK,
        PlayerStyle.PLAYMAKER,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: PlayerPosition.LEFTMIDFIELD,
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.DRIBBLER,
        PlayerStyle.OFFENSIVE_FULLBACK,
        PlayerStyle.DEFENSIVE_FULLBACK,
        PlayerStyle.PLAYMAKER,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: PlayerPosition.LEFTMIDFIELD,
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.DRIBBLER,
        PlayerStyle.OFFENSIVE_FULLBACK,
        PlayerStyle.DEFENSIVE_FULLBACK,
        PlayerStyle.PLAYMAKER,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: random.getRandomInArray([
        PlayerPosition.CENTERMIDFIELD,
        PlayerPosition.ATTACKINGMIDFIELD,
        PlayerPosition.DEFENSIVEMIDFIELD,
      ]),
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.DRIBBLER,
        PlayerStyle.PLAYMAKER,
        PlayerStyle.BOX_2_BOX,
        PlayerStyle.HARD_WORKING_MID,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: random.getRandomInArray([
        PlayerPosition.CENTERMIDFIELD,
        PlayerPosition.ATTACKINGMIDFIELD,
        PlayerPosition.DEFENSIVEMIDFIELD,
      ]),
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.DRIBBLER,
        PlayerStyle.PLAYMAKER,
        PlayerStyle.BOX_2_BOX,
        PlayerStyle.HARD_WORKING_MID,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: random.getRandomInArray([
        PlayerPosition.CENTERMIDFIELD,
        PlayerPosition.ATTACKINGMIDFIELD,
        PlayerPosition.DEFENSIVEMIDFIELD,
      ]),
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.DRIBBLER,
        PlayerStyle.PLAYMAKER,
        PlayerStyle.BOX_2_BOX,
        PlayerStyle.HARD_WORKING_MID,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: random.getRandomInArray([
        PlayerPosition.CENTERMIDFIELD,
        PlayerPosition.ATTACKINGMIDFIELD,
        PlayerPosition.DEFENSIVEMIDFIELD,
      ]),
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.DRIBBLER,
        PlayerStyle.PLAYMAKER,
        PlayerStyle.BOX_2_BOX,
        PlayerStyle.HARD_WORKING_MID,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: random.getRandomInArray([
        PlayerPosition.FORWARD,
        PlayerPosition.STRIKER,
      ]),
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.FORWARD,
        PlayerStyle.POACHER,
        PlayerStyle.STRIKER,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: random.getRandomInArray([
        PlayerPosition.FORWARD,
        PlayerPosition.STRIKER,
      ]),
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.FORWARD,
        PlayerStyle.POACHER,
        PlayerStyle.STRIKER,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: random.getRandomInArray([
        PlayerPosition.FORWARD,
        PlayerPosition.STRIKER,
      ]),
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.FORWARD,
        PlayerStyle.POACHER,
        PlayerStyle.STRIKER,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
    {
      position: random.getRandomInArray([
        PlayerPosition.FORWARD,
        PlayerPosition.STRIKER,
      ]),
      quality: random.getRandomInArray([
        PlayerQuality.POOR,
        PlayerQuality.TRASH,
      ]),
      style: random.getRandomInArray([
        PlayerStyle.FORWARD,
        PlayerStyle.POACHER,
        PlayerStyle.STRIKER,
      ]),
      ...options,
      ageTemplate: { min: 16, max: 19 },
    },
  ];

  const players: PlayerModel.GeneratorOutcome[] = [];

  formula.map((f) => {
    players.push(generatePlayer(f));
  });

  return players;
}
