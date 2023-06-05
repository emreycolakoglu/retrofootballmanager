import {
  goalkeepingSkillList,
  IPlayerFormula,
  mentalSkillList,
  physicalSkillList,
  PlayerPositionArray,
  PlayerQualityArray,
  PlayerStyleArray,
  positionTemplates,
  qualityTemplates,
  reputationTemplates,
  styleTemplates,
  technicalSkillList,
} from "./interfaces";
import { random } from "@rfm/utility";
import { PlayerModel } from "@rfm/interfaces";

export function generatePlayer(options: IPlayerFormula): PlayerModel.Base {
  const {
    nationality,
    quality,
    style,
    position,
    clubId,
    ageTemplate,
    firstNames,
    lastNames,
  } = options;

  if (!nationality) return null;

  const qualityVal = quality || random.getRandomInArray(PlayerQualityArray);
  const qualityTemplate = qualityTemplates[qualityVal];
  const styleTemplate =
    styleTemplates[style || random.getRandomInArray(PlayerStyleArray)];
  const positionTemplate =
    positionTemplates[position || random.getRandomInArray(PlayerPositionArray)];
  const reputationTemplate = reputationTemplates[qualityVal];

  const firstName = random.getRandomInArray(firstNames);
  const lastName = random.getRandomInArray(lastNames);

  const age = random.getBetween(ageTemplate.min, ageTemplate.max);
  const technical = buildSkillsForPlayer<PlayerModel.TechnicalSkills>(
    technicalSkillList,
    styleTemplate,
    qualityTemplate
  );
  const mental = buildSkillsForPlayer<PlayerModel.MentalSkills>(
    mentalSkillList,
    styleTemplate,
    qualityTemplate
  );
  const physical = buildSkillsForPlayer<PlayerModel.PhysicalSkills>(
    physicalSkillList,
    styleTemplate,
    qualityTemplate
  );
  const goalkeeping = buildSkillsForPlayer<PlayerModel.GoalkeepingSkills>(
    goalkeepingSkillList,
    styleTemplate,
    qualityTemplate
  );
  const p = buildPositionWithTemplate(positionTemplate);
  const prestige = {
    local: random.getBetween(reputationTemplate.min, reputationTemplate.max),
    global: random.getBetween(reputationTemplate.min, reputationTemplate.max),
  };

  return {
    firstName,
    lastName,
    age,
    nationality: nationality.name,
    technical,
    mental,
    physical,
    goalkeeping,
    position: p,
    prestige,
    club: clubId,
  };
}

function buildSkillsForPlayer<T>(
  skillList: string[],
  style: { primary: string[]; secondary: string[] },
  quality: {
    primary: { min: number; max: number };
    secondary: { min: number; max: number };
    other: { min: number; max: number };
  }
): T {
  const result: T = {} as any;

  skillList.map((skill) => {
    if (style.primary.indexOf(skill) > -1) {
      result[skill] = random.getBetween(
        quality.primary.min,
        quality.primary.max
      );
    } else if (style.secondary.indexOf(skill) > -1) {
      result[skill] = random.getBetween(
        quality.secondary.min,
        quality.secondary.max
      );
    } else {
      result[skill] = random.getBetween(quality.other.min, quality.other.max);
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
        result[key] = random.getBetween(position.min, position.max);
      } else {
        result[key] = {
          left: random.getBetween(position.left.min, position.left.max),
          center: random.getBetween(position.center.min, position.center.max),
          right: random.getBetween(position.right.min, position.right.max),
        };
      }
    }
  }
  return { ..._base, ...result };
}
