import {
  ICreateClubUsecase,
  ICreatePlayerUsecase,
  IGetPlayerByIdUsecase,
} from "../usecases";
import {
  ICreateContinentUsecase,
  IListContinentUsecase,
} from "../usecases/continents";

export interface IDatalayer {
  players: {
    /**
     * retrieves a player by id
     */
    getPlayerById: IGetPlayerByIdUsecase.Usecase;
    /**
     * creates a player
     */
    createPlayer: ICreatePlayerUsecase.Usecase;
  };
  clubs: {
    /**
     * creates a club
     */
    createClub: ICreateClubUsecase.Usecase;
  };
  continents: {
    /**
     * creates a continent
     */
    createContinent: ICreateContinentUsecase.Usecase;
    /**
     * lists continents
     */
    listContinents: IListContinentUsecase.Usecase;
  };
}
