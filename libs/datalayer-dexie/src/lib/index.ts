import { IDatalayer } from "@rfm/interfaces";
import { CreateClubUsecase } from "./clubs";
import { CreateContinentUsecase, ListContinentUsecase } from "./continents";
import _dbInstance, { RFMDatabase } from "./dbInstance";
import { CreatePlayerUsecase, GetPlayerByIdUsecase } from "./players";

export class DexieDatalayer implements IDatalayer {
  dbInstance: RFMDatabase = _dbInstance;

  players: IDatalayer["players"] = {
    getPlayerById: new GetPlayerByIdUsecase(this.dbInstance),
    createPlayer: new CreatePlayerUsecase(this.dbInstance),
  };
  clubs: IDatalayer["clubs"] = {
    createClub: new CreateClubUsecase(this.dbInstance),
  };
  continents: IDatalayer["continents"] = {
    createContinent: new CreateContinentUsecase(this.dbInstance),
    listContinents: new ListContinentUsecase(this.dbInstance),
  };
}
