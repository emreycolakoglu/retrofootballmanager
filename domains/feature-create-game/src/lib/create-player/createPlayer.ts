/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  qualityTemplates,
  reputationTemplates,
  positionTemplates,
  styleTemplates,
  technicalSkillList,
  mentalSkillList,
  physicalSkillList,
  goalkeepingSkillList,
} from "./constants";
import { PlayerGenerator } from "./interfaces";
import { Random } from "@rfm/utility-common";

export const PlayerQualityArray = [
  PlayerGenerator.PlayerQuality.GOOD,
  PlayerGenerator.PlayerQuality.POOR,
  PlayerGenerator.PlayerQuality.REGULAR,
  PlayerGenerator.PlayerQuality.TRASH,
  PlayerGenerator.PlayerQuality.VERYGOOD,
  PlayerGenerator.PlayerQuality.WORLDWIDE,
];

export const PlayerStyleArray = [
  PlayerGenerator.PlayerStyle.GOALKEEPER,
  PlayerGenerator.PlayerStyle.PLAYMAKER_DEFENDER,
  PlayerGenerator.PlayerStyle.STRONG_DEFENDER,
  PlayerGenerator.PlayerStyle.QUICK_DEFENDER,
  PlayerGenerator.PlayerStyle.DEFENSIVE_FULLBACK,
  PlayerGenerator.PlayerStyle.OFFENSIVE_FULLBACK,
  PlayerGenerator.PlayerStyle.DRIBBLER,
  PlayerGenerator.PlayerStyle.BOX_2_BOX,
  PlayerGenerator.PlayerStyle.PLAYMAKER,
  PlayerGenerator.PlayerStyle.HARD_WORKING_MID,
  PlayerGenerator.PlayerStyle.POACHER,
  PlayerGenerator.PlayerStyle.STRIKER,
  PlayerGenerator.PlayerStyle.FORWARD,
];

export const PlayerPositionArray = [
  PlayerGenerator.PlayerPosition.GOALKEEPER,
  PlayerGenerator.PlayerPosition.RIGHTBACK,
  PlayerGenerator.PlayerPosition.LEFTBACK,
  PlayerGenerator.PlayerPosition.CENTERBACK,
  PlayerGenerator.PlayerPosition.RIGHTMIDFIELD,
  PlayerGenerator.PlayerPosition.LEFTMIDFIELD,
  PlayerGenerator.PlayerPosition.CENTERMIDFIELD,
  PlayerGenerator.PlayerPosition.DEFENSIVEMIDFIELD,
  PlayerGenerator.PlayerPosition.ATTACKINGMIDFIELD,
  PlayerGenerator.PlayerPosition.FORWARD,
  PlayerGenerator.PlayerPosition.STRIKER,
];

export function generatePlayer(
  options: PlayerGenerator.Formula,
): PlayerGenerator.Outcome {
  const { quality, style, position, ageTemplate, firstNames, lastNames } =
    options;

  const qualityVal: PlayerGenerator.PlayerQuality =
    quality || Random.getRandomInArray(PlayerQualityArray);
  const qualityTemplate = qualityTemplates[qualityVal];
  const styleTemplate =
    styleTemplates[style || Random.getRandomInArray(PlayerStyleArray)];
  const positionTemplate: PlayerGenerator.PlayerPosition =
    positionTemplates[position || Random.getRandomInArray(PlayerPositionArray)];
  const reputationTemplate = reputationTemplates[qualityVal];

  const firstName = Random.getRandomInArray(firstNames);
  const lastName = Random.getRandomInArray(lastNames);

  const age = ageTemplate
    ? Random.getBetween(ageTemplate.min, ageTemplate.max)
    : Random.getBetween(18, 35);
  const technical = buildSkillsForPlayer<PlayerGenerator.TechnicalSkills>(
    technicalSkillList,
    styleTemplate,
    qualityTemplate,
  );
  const mental = buildSkillsForPlayer<PlayerGenerator.MentalSkills>(
    mentalSkillList,
    styleTemplate,
    qualityTemplate,
  );
  const physical = buildSkillsForPlayer<PlayerGenerator.PhysicalSkills>(
    physicalSkillList,
    styleTemplate,
    qualityTemplate,
  );
  const goalkeeping = buildSkillsForPlayer<PlayerGenerator.GoalkeepingSkills>(
    goalkeepingSkillList,
    styleTemplate,
    qualityTemplate,
  );
  const p = buildPositionWithTemplate(positionTemplate);
  const prestige = {
    local: Random.getBetween(reputationTemplate.min, reputationTemplate.max),
    global: Random.getBetween(reputationTemplate.min, reputationTemplate.max),
  };

  return {
    firstName,
    lastName,
    age,
    technical,
    mental,
    physical,
    goalkeeping,
    position: p,
    prestige,
  };
}

function buildSkillsForPlayer<T>(
  skillList: string[],
  style: { primary: string[]; secondary: string[] },
  quality: {
    primary: { min: number; max: number };
    secondary: { min: number; max: number };
    other: { min: number; max: number };
  },
): T {
  const result: T = {} as any;

  skillList.map((skill) => {
    if (style.primary.indexOf(skill) > -1) {
      //@ts-ignore
      result[skill] = Random.getBetween(
        quality.primary.min,
        quality.primary.max,
      );
    } else if (style.secondary.indexOf(skill) > -1) {
      //@ts-ignore
      result[skill] = Random.getBetween(
        quality.secondary.min,
        quality.secondary.max,
      );
    } else {
      //@ts-ignore
      result[skill] = Random.getBetween(quality.other.min, quality.other.max);
    }
  });

  return result;
}

function buildPositionWithTemplate(template?: any) {
  const _base = {
    goalkeeper: 1,
    defence: 1,
    defensiveMid: 1,
    midfield: 1,
    attackingMid: 1,
    forward: 1,
    side: {
      left: 1,
      center: 1,
      right: 1,
    },
  };
  if (!template) {
    return _base;
  }
  const result: any = {};
  for (const key in template) {
    // eslint-disable-next-line no-prototype-builtins
    if (template.hasOwnProperty(key)) {
      const position = template[key];
      if (key != "side") {
        result[key] = Random.getBetween(position.min, position.max);
      } else {
        result[key] = {
          left: Random.getBetween(position.left.min, position.left.max),
          center: Random.getBetween(position.center.min, position.center.max),
          right: Random.getBetween(position.right.min, position.right.max),
        };
      }
    }
  }
  return { ..._base, ...result };
}
