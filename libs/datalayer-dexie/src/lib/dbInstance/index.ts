import {
  PlayerModel,
  ClubModel,
  CityModel,
  ContinentModel,
  CountryModel,
} from "@rfm/interfaces";
import Dexie from "dexie";

export class RFMDatabase extends Dexie {
  players: Dexie.Table<PlayerModel.Base, number>;
  clubs: Dexie.Table<ClubModel.Base, number>;
  continents: Dexie.Table<ContinentModel.Base, number>;
  countries: Dexie.Table<CountryModel.Base, number>;
  cities: Dexie.Table<CityModel.Base, number>;

  constructor() {
    super("rfm");
    this.version(3).stores({
      players: "++id",
      clubs: "++id",
      continents: "++id",
      countries: "++id",
      cities: "++id",
    });
  }
}

const db = new RFMDatabase();

export default db;
