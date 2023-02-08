import {
  ICreateClubUsecase,
  ICreatePlayerUsecase,
  IGetPlayerByIdUsecase,
} from "../usecases";

export interface IDatalayer {
  players: {
    /**
     * retrieves a player by id
     */
    getPlayerById: IGetPlayerByIdUsecase.Usecase;
    createPlayer: ICreatePlayerUsecase.Usecase;
  };
  clubs: {
    /**
     * creates a club
     */
    createClub: ICreateClubUsecase.Usecase;
  };
}
