import { ClubModel } from "../../models/club";

export namespace ICreateClubUsecase {
  export interface Usecase {
    execute: (
      club: ICreateClubUsecase.Input
    ) => Promise<ICreateClubUsecase.Output>;
  }
  export type Input = ClubModel.Base;
  export type Output = ClubModel.Base;
}
