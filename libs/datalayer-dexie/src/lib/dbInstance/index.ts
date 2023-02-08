import { PlayerModel, ClubModel } from "@rfm/interfaces";
import Dexie from "dexie";

export class RFMDatabase extends Dexie {
  players: Dexie.Table<PlayerModel.Base, number>;
  clubs: Dexie.Table<ClubModel.Base, number>;

  constructor() {
    super("rfm");
    this.version(2).stores({
      players: "++id",
      clubs: "++id",
    });
  }
}

const db = new RFMDatabase();

export default db;
