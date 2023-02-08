import { IDatalayer } from "@rfm/interfaces";
import { CreateClubUsecase } from "./clubs";
import _dbInstance, { RFMDatabase } from "./dbInstance";
import { GetPlayerByIdUsecase } from "./players";

export class DexieDatalayer implements IDatalayer {
  dbInstance: RFMDatabase = _dbInstance;

  players: IDatalayer["players"] = {
    getPlayerById: new GetPlayerByIdUsecase(this.dbInstance),
  };
  clubs: IDatalayer["clubs"] = {
    createClub: new CreateClubUsecase(this.dbInstance),
  };
}
