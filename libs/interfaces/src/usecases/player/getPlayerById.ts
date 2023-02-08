/* eslint-disable @typescript-eslint/no-empty-interface */
import { PlayerModel } from "../../models";

export namespace IGetPlayerByIdUsecase {
  export interface Usecase {
    execute: (
      playerId: IGetPlayerByIdUsecase.Input
    ) => Promise<IGetPlayerByIdUsecase.Output>;
  }
  export interface Input extends Number {}
  export interface Output extends PlayerModel.Base {}
}
