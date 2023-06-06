export namespace ContractModel {
  interface Base {
    id?: number;
    yearlyWage: number;
    clubId: number;
    expiryDate: number;
  }
  export interface PlayerContract extends Base {
    playerId: number;
  }
  export interface StaffContract extends Base {
    staffId: number;
  }
}
