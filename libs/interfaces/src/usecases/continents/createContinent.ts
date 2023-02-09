import { ContinentModel } from "../../models";

export namespace ICreateContinentUsecase {
  export interface Usecase {
    execute: (
      continent: ICreateContinentUsecase.Input
    ) => Promise<ICreateContinentUsecase.Output>;
  }
  export type Input = ContinentModel.Base;
  export type Output = ContinentModel.Base;
}
