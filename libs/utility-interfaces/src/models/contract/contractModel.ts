export namespace ContractModel {
  export interface Base {
    weeklyWage: number;
    clubId: number;
    expiryDate: number;
    contractType: ContractType;
    perAppearance?: number;
    perGoal?: number;
    perAssist?: number;
    contractSquad: ContractSquad;
    minFeeRelease?: number;
    relegationRelease?: number;
    nonPromotionRelease?: number;
    squadNumber: number;
  }
  export interface PlayerContractProposal {
    weeklyWage: number;
    durationInYears: number;
  }
  export enum ContractType {
    FULLTIME = 1,
    PARTTIME = 2,
    YOUTH = 3,
  }
  export enum ContractSquad {
    MAIN = 1,
    RESERVES = 2,
    YOUTH = 3,
  }
}
