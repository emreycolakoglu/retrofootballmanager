import {
  PlayerModel,
  ClubModel,
  CityModel,
  ContinentModel,
  CountryModel,
  ColorModel,
  GameModel,
  NewsModel,
} from "@rfm/interfaces";
import Dexie from "dexie";

class RFMDatabase extends Dexie {
  players!: Dexie.Table<PlayerModel.Base, number>;
  clubs!: Dexie.Table<ClubModel.Base, number>;
  continents!: Dexie.Table<ContinentModel.Base, number>;
  countries!: Dexie.Table<CountryModel.Base, number>;
  cities!: Dexie.Table<CityModel.Base, number>;
  colors!: Dexie.Table<ColorModel.Base, number>;
  game!: Dexie.Table<GameModel.Base, number>;
  news!: Dexie.Table<NewsModel.Base, number>;

  constructor() {
    super("rfm");
    this.version(4).stores({
      players: "++id",
      clubs: "++id",
      continents: "++id",
      countries: "++id",
      cities: "++id",
      colors: "++id",
      game: "++id",
      news: "++id",
    });
  }
}

const db = new RFMDatabase();

export default db;
