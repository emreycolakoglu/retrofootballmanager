import { PlayerModel } from "../../models";

export namespace IGetPlayerByIdUsecase {
  export interface Usecase {
    execute: (
      playerId: IGetPlayerByIdUsecase.Input
    ) => Promise<IGetPlayerByIdUsecase.Output>;
  }
  export type Input = number;
  export type Output = PlayerModel.Base;
}
