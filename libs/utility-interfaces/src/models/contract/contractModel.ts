export namespace ContractModel {
  export interface Base {
    id?: number;
    weeklyWage: number;
    clubId: number;
    expiryDate: number;
  }
  export interface PlayerContractProposal {
    weeklyWage: number;
    durationInYears: number;
  }
}
