import { PlayerModel } from "../../models";

export namespace ICreatePlayerUsecase {
  export interface Usecase {
    execute: (
      club: ICreatePlayerUsecase.Input
    ) => Promise<ICreatePlayerUsecase.Output>;
  }
  export type Input = PlayerModel.Base;
  export type Output = PlayerModel.Base;
}
