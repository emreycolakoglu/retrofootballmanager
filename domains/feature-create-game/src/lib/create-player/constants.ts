import { PlayerGenerator } from "./interfaces";

export const reputationTemplates = {
  worldwide: { min: 800, max: 1000 },
  verygood: { min: 600, max: 800 },
  good: { min: 400, max: 600 },
  regular: { min: 200, max: 400 },
  poor: { min: 100, max: 200 },
  trash: { min: 0, max: 100 },
};

export const qualityTemplates = {
  worldwide: {
    primary: { min: 15, max: 20 },
    secondary: { min: 10, max: 20 },
    other: { min: 1, max: 20 },
  },
  verygood: {
    primary: { min: 13, max: 18 },
    secondary: { min: 8, max: 17 },
    other: { min: 1, max: 17 },
  },
  good: {
    primary: { min: 11, max: 16 },
    secondary: { min: 6, max: 15 },
    other: { min: 1, max: 14 },
  },
  regular: {
    primary: { min: 9, max: 14 },
    secondary: { min: 4, max: 13 },
    other: { min: 1, max: 12 },
  },
  poor: {
    primary: { min: 7, max: 12 },
    secondary: { min: 3, max: 11 },
    other: { min: 1, max: 11 },
  },
  trash: {
    primary: { min: 5, max: 10 },
    secondary: { min: 2, max: 9 },
    other: { min: 1, max: 9 },
  },
};

/**
 * min max templates for different positions
 */
export const positionTemplates: Record<
  string,
  PlayerGenerator.PlayerPosition | any
> = {
  goalKeeper: {
    goalkeeper: { min: 20, max: 20 },
    side: {
      left: { min: 1, max: 1 },
      center: { min: 20, max: 20 },
      right: { min: 1, max: 1 },
    },
  },
  rightBack: {
    defence: { min: 18, max: 20 },
    defensiveMid: { min: 5, max: 20 },
    side: {
      left: { min: 1, max: 1 },
      center: { min: 1, max: 1 },
      right: { min: 18, max: 20 },
    },
  },
  leftBack: {
    defence: { min: 18, max: 20 },
    defensiveMid: { min: 5, max: 20 },
    side: {
      left: { min: 18, max: 20 },
      center: { min: 1, max: 1 },
      right: { min: 1, max: 1 },
    },
  },
  centerBack: {
    defence: { min: 18, max: 20 },
    defensiveMid: { min: 5, max: 20 },
    side: {
      left: { min: 1, max: 1 },
      center: { min: 18, max: 20 },
      right: { min: 1, max: 1 },
    },
  },
  rightMidfield: {
    midfield: { min: 18, max: 20 },
    side: {
      left: { min: 1, max: 1 },
      center: { min: 1, max: 1 },
      right: { min: 18, max: 20 },
    },
  },
  leftMidfield: {
    midfield: { min: 18, max: 20 },
    side: {
      left: { min: 18, max: 20 },
      center: { min: 1, max: 1 },
      right: { min: 1, max: 1 },
    },
  },
  defensiveMidfield: {
    defensiveMid: { min: 18, max: 20 },
    midfield: { min: 5, max: 20 },
    side: {
      left: { min: 1, max: 1 },
      center: { min: 18, max: 20 },
      right: { min: 1, max: 1 },
    },
  },
  centerMidfield: {
    defensiveMid: { min: 5, max: 20 },
    midfield: { min: 18, max: 20 },
    attackingMid: { min: 5, max: 20 },
    side: {
      left: { min: 1, max: 1 },
      center: { min: 18, max: 20 },
      right: { min: 1, max: 1 },
    },
  },
  attackingMidfield: {
    midfield: { min: 5, max: 20 },
    attackingMid: { min: 18, max: 20 },
    side: {
      left: { min: 1, max: 1 },
      center: { min: 18, max: 20 },
      right: { min: 1, max: 1 },
    },
  },
  forward: {
    attackingMid: { min: 5, max: 20 },
    forward: { min: 15, max: 20 },
    side: {
      left: { min: 5, max: 20 },
      center: { min: 18, max: 20 },
      right: { min: 5, max: 20 },
    },
  },
  striker: {
    forward: { min: 18, max: 20 },
    side: {
      left: { min: 1, max: 3 },
      center: { min: 18, max: 20 },
      right: { min: 1, max: 3 },
    },
  },
};

/**
 * dribbler, playmaker, defender, target man etc
 */
export const styleTemplates: Record<
  string,
  { primary: string[]; secondary: string[] }
> = {
  goalkeeper: {
    primary: [
      "handling",
      "reflexes",
      "oneOnOnes",
      "aerialAbility",
      "rushingOut",
    ],
    secondary: ["agility", "balance", "jumping"],
  },
  playMakerDefender: {
    primary: ["passing", "anticipation", "decisions", "teamWork", "balance"],
    secondary: [
      "heading",
      "marking",
      "tackling",
      "positioning",
      "strength",
      "agility",
    ],
  },
  strongDefender: {
    primary: ["strength", "jumping", "pace", "tackling", "marking"],
    secondary: ["heading", "decisions", "balance", "positioning", "bravery"],
  },
  quickDefender: {
    primary: ["agility", "pace", "acceleration", "tackling", "marking"],
    secondary: ["balance", "positioning", "heading", "passing", "positioning"],
  },
  defensiveFullback: {
    primary: ["tackling", "strength", "positioning", "heading", "balance"],
    secondary: ["agility", "bravery", "marking", "stamina"],
  },
  offensiveFullback: {
    primary: ["dribbling", "technique", "agility", "passing", "decisions"],
    secondary: ["tackling", "strength", "positioning", "balance", "stamina"],
  },
  dribbler: {
    primary: ["dribbling", "technique", "decisions", "acceleration", "agility"],
    secondary: ["determination", "offTheBall", "balance", "crossing"],
  },
  box2box: {
    primary: ["workRate", "passing", "tackling", "finishing", "offTheBall"],
    secondary: ["stamina", "strength", "aggression", "bravery"],
  },
  playmaker: {
    primary: ["passing", "creativity", "decisions", "offTheBall", "technique"],
    secondary: ["stamina", "finishing", "longShots", "balance"],
  },
  hardWorkingMidfielder: {
    primary: ["workRate", "passing", "tackling", "finishing", "offTheBall"],
    secondary: ["stamina", "strength", "aggression", "bravery"],
  },
  poacher: {
    primary: ["finishing", "heading", "offTheBall", "stamina", "agility"],
    secondary: [
      "acceleration",
      "balance",
      "jumping",
      "determination",
      "decisions",
    ],
  },
  striker: {
    primary: ["finishing", "heading", "offTheBall", "stamina", "passing"],
    secondary: ["longShots", "balance", "jumping", "strength", "decisions"],
  },
  forward: {
    primary: ["finishing", "heading", "dribbling", "technique", "passing"],
    secondary: ["stamina", "acceleration", "strength", "crossing"],
  },
};

export const technicalSkillList = [
  "crossing",
  "dribbling",
  "finishing",
  "heading",
  "longShots",
  "longThrows",
  "marking",
  "passing",
  "penaltyTaking",
  "setPieces",
  "tackling",
  "technique",
];

export const mentalSkillList = [
  "aggression",
  "anticipation",
  "bravery",
  "creativity",
  "decisions",
  "determination",
  "flair",
  "influence",
  "offTheBall",
  "positioning",
  "teamWork",
  "workRate",
];

export const physicalSkillList = [
  "acceleration",
  "agility",
  "balance",
  "jumping",
  "pace",
  "stamina",
  "strength",
];

export const goalkeepingSkillList = [
  "aerialAbility",
  "commandOfArea",
  "communication",
  "eccentricity",
  "handling",
  "kicking",
  "oneOnOnes",
  "reflexes",
  "rushingOut",
  "tendencyToPunch",
  "throwing",
];
