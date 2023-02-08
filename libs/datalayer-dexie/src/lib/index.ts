import { IDatalayer } from "@rfm/interfaces";
import _dbInstance, { RFMDatabase } from "./dbInstance";
import { GetPlayerByIdUsecase } from "./getlPlayerById";

export class DexieDatalayer implements IDatalayer {
  dbInstance: RFMDatabase = _dbInstance;

  players: IDatalayer["players"] = {
    getPlayerById: new GetPlayerByIdUsecase(this.dbInstance),
  };
}
