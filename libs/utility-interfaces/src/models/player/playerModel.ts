import { ContractModel } from "../contract";

export namespace PlayerModel {
  export interface Base {
    id?: number;
    player: Player;
    contract: ContractModel.Base;
  }

  export interface Player {
    firstName: string;
    lastName: string;
    nationality: string;
    age: number;
    technical: TechnicalSkills;
    mental: MentalSkills;
    physical: PhysicalSkills;
    goalkeeping: GoalkeepingSkills;
    position: PlayerPosition;
    prestige: PlayerPrestige;
  }

  export interface GeneratorOutcome {
    firstName: string;
    lastName: string;
    age: number;
    technical: TechnicalSkills;
    mental: MentalSkills;
    physical: PhysicalSkills;
    goalkeeping: GoalkeepingSkills;
    position: PlayerPosition;
    prestige: PlayerPrestige;
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

  export interface PlayerPosition {
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
  }

  export interface PlayerPrestige {
    local: number;
    global: number;
  }
}
