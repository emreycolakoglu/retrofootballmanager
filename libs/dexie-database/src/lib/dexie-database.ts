import {
  PlayerModel,
  ClubModel,
  CityModel,
  ContinentModel,
  CountryModel,
  ColorModel,
  GameModel,
  NewsModel,
  StaffModel,
  ContractModel,
} from "@rfm/interfaces";
import Dexie from "dexie";

class RFMDatabase extends Dexie {
  players!: Dexie.Table<PlayerModel.Base, number>;
  staff!: Dexie.Table<StaffModel.Base, number>;
  clubs!: Dexie.Table<ClubModel.Base, number>;
  playerContracts!: Dexie.Table<ContractModel.PlayerContract, number>;
  staffContracts!: Dexie.Table<ContractModel.StaffContract, number>;
  continents!: Dexie.Table<ContinentModel.Base, number>;
  countries!: Dexie.Table<CountryModel.Base, number>;
  cities!: Dexie.Table<CityModel.Base, number>;
  colors!: Dexie.Table<ColorModel.Base, number>;
  game!: Dexie.Table<GameModel.Base, number>;
  news!: Dexie.Table<NewsModel.Base, number>;

  constructor() {
    super("rfm");
    this.version(5).stores({
      players: "++id",
      staff: "++id",
      clubs: "++id",
      playerContracts: "++id",
      staffContracts: "++id",
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
