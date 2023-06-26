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
  LanguageModel,
} from "@rfm/utility-interfaces";
import Dexie from "dexie";

class RFMDatabase extends Dexie {
  players!: Dexie.Table<PlayerModel.Base, number>;
  staff!: Dexie.Table<StaffModel.Base, number>;
  clubs!: Dexie.Table<ClubModel.Base, number>;
  playerContracts!: Dexie.Table<ContractModel.Base, number>;
  staffContracts!: Dexie.Table<ContractModel.Base, number>;
  continents!: Dexie.Table<ContinentModel.Base, string>;
  countries!: Dexie.Table<CountryModel.Base, string>;
  cities!: Dexie.Table<CityModel.Base, number>;
  colors!: Dexie.Table<ColorModel.Base, number>;
  games!: Dexie.Table<GameModel.Base, number>;
  news!: Dexie.Table<NewsModel.Base, number>;
  languages!: Dexie.Table<LanguageModel.Base, string>;
  firstNames!: Dexie.Table<{ language: string; value: string }, number>;
  lastNames!: Dexie.Table<{ language: string; value: string }, number>;

  constructor() {
    super("rfm");
    this.version(8).stores({
      players: "++id",
      staff: "++id",
      clubs: "++id",
      playerContracts: "++id",
      staffContracts: "++id",
      continents: "key",
      countries: "alpha3Code",
      cities: "++id",
      colors: "++id",
      games: "++id",
      news: "++id",
      languages: "key",
      firstNames: "++id",
      lastNames: "++id",
    });
  }
}

const db = new RFMDatabase();

export default db;
