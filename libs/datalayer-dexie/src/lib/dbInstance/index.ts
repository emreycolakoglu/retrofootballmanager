import { PlayerModel } from "@rfm/interfaces";
import Dexie from "dexie";

export class RFMDatabase extends Dexie {
  players: Dexie.Table<PlayerModel.Base, number>;

  constructor() {
    super("rfm");
    this.version(1).stores({
      players: "++id",
    });
  }
}

const db = new RFMDatabase();

export default db;
