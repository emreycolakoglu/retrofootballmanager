export namespace PlayerModel {
  export interface Base {
    id?: number;
    firstName: string;
    lastName: string;
    nationality: string;
    age: number;
    technical: TechnicalSkills;
    mental: MentalSkills;
    physical: PhysicalSkills;
    goalkeeping: GoalkeepingSkills;
    position: Position;
    contract?: string;
    club: number;
    prestige: Prestige;
  }

  export interface GeneratorOutcome {
    firstName: string;
    lastName: string;
    age: number;
    technical: TechnicalSkills;
    mental: MentalSkills;
    physical: PhysicalSkills;
    goalkeeping: GoalkeepingSkills;
    position: Position;
    prestige: Prestige;
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

  export interface Position {
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

  export interface Prestige {
    local: number;
    global: number;
  }
}
