import { ContinentModel } from "../../models";

export namespace IListContinentUsecase {
  export interface Usecase {
    execute: (
      query?: IListContinentUsecase.Input
    ) => Promise<IListContinentUsecase.Output>;
  }
  export type Input = Record<string, string | number>;
  export type Output = ContinentModel.Base[];
}
