export namespace PlayerGenerator {
  export interface Formula {
    position?: PlayerPosition;
    style?: PlayerStyle;
    quality?: PlayerQuality;
    ageTemplate?: { min: number; max: number };
    clubId?: string;
    firstNames: string[];
    lastNames: string[];
  }

  export interface Outcome {
    firstName: string;
    lastName: string;
    age: number;
    technical: TechnicalSkills;
    mental: MentalSkills;
    physical: PhysicalSkills;
    goalkeeping: GoalkeepingSkills;
    position: {
      goalkeeper: number;
      defence: number;
      defensiveMid: number;
      midfield: number;
      attackingMid: number;
      forward: number;
      side: {
        left: number;
        center: number;
        right: number;
      };
    };
    prestige: PlayerPrestige;
  }

  export enum PlayerPosition {
    GOALKEEPER = "goalKeeper",
    RIGHTBACK = "rightBack",
    LEFTBACK = "leftBack",
    CENTERBACK = "centerBack",
    RIGHTMIDFIELD = "rightMidfield",
    LEFTMIDFIELD = "leftMidfield",
    CENTERMIDFIELD = "centerMidfield",
    DEFENSIVEMIDFIELD = "defensiveMidfield",
    ATTACKINGMIDFIELD = "attackingMidfield",
    FORWARD = "forward",
    STRIKER = "striker",
  }

  export enum PlayerQuality {
    WORLDWIDE = "worldwide",
    VERYGOOD = "verygood",
    GOOD = "good",
    REGULAR = "regular",
    POOR = "poor",
    TRASH = "trash",
  }

  export enum PlayerStyle {
    GOALKEEPER = "goalkeeper",
    PLAYMAKER_DEFENDER = "playMakerDefender",
    STRONG_DEFENDER = "strongDefender",
    QUICK_DEFENDER = "quickDefender",
    DEFENSIVE_FULLBACK = "defensiveFullback",
    OFFENSIVE_FULLBACK = "offensiveFullback",
    DRIBBLER = "dribbler",
    BOX_2_BOX = "box2box",
    PLAYMAKER = "playmaker",
    HARD_WORKING_MID = "hardWorkingMidfielder",
    POACHER = "poacher",
    STRIKER = "striker",
    FORWARD = "forward",
  }

  export interface TechnicalSkills {
    crossing: number;
    dribbling: number;
    finishing: number;
    heading: number;
    longShots: number;
    longThrows: number;
    marking: number;
    passing: number;
    penaltyTaking: number;
    setPieces: number;
    tackling: number;
    technique: number;
  }

  export interface GoalkeepingSkills {
    aerialAbility: number;
    commandOfArea: number;
    communication: number;
    eccentricity: number;
    handling: number;
    kicking: number;
    oneOnOnes: number;
    reflexes: number;
    rushingOut: number;
    tendencyToPunch: number;
    throwing: number;
  }

  export interface MentalSkills {
    aggression: number;
    anticipation: number;
    bravery: number;
    creativity: number;
    decisions: number;
    determination: number;
    flair: number;
    influence: number;
    offTheBall: number;
    positioning: number;
    teamWork: number;
    workRate: number;
  }

  export interface PhysicalSkills {
    acceleration: number;
    agility: number;
    balance: number;
    jumping: number;
    pace: number;
    stamina: number;
    strength: number;
  }

  export interface PlayerPrestige {
    local: number;
    global: number;
  }
}
