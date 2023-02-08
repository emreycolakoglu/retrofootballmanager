import { ICreateClubUsecase, IGetPlayerByIdUsecase } from "../usecases";

export interface IDatalayer {
  players: {
    getPlayerById: IGetPlayerByIdUsecase.Usecase;
  };
  clubs: {
    createClub: ICreateClubUsecase.Usecase;
  };
}
