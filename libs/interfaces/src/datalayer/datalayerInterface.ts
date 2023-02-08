import { IGetPlayerByIdUsecase } from "../usecases";

export interface IDatalayer {
  players: {
    getPlayerById: IGetPlayerByIdUsecase.Usecase;
  };
}
