export namespace StaffModel {
  export interface Base {
    id?: number;
    firstName: string;
    lastName: string;
    nationality: string;
    age: number;
    technical: TechnicalSkills;
    nonTechnical: NonTechnicalSkills;
  }
  export interface TechnicalSkills {
    coachingGoalkeepers: number;
    coachingOutfield: number;
    manManagement: number;
    pyhsiotherapy: number;
    tacticalKnowledge: number;
    youngsters: number;
  }
  export interface NonTechnicalSkills {
    adaptability: number;
    determination: number;
    judgingAbility: number;
    judgingPotential: number;
    discipline: number;
    motivating: number;
  }
}
