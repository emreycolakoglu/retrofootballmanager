export namespace RestCountries {
  export interface Country {
    name: {
      common: string;
      official: string;
      nativeName: Record<
        string,
        {
          official: string;
          common: string;
        }
      >;
    };
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Record<
      string,
      {
        name: string;
        symbol: string;
      }
    >;
    idd: {
      root: string;
      suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Record<string, string>;
    translations: Record<
      string,
      {
        official: string;
        common: string;
      }
    >;
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms: {
      eng: {
        f: string;
        m: string;
      };
      fra: {
        f: string;
        m: string;
      };
    };
    flag: string;
    maps: {
      googleMaps: string;
      openStreetMaps: string;
    };
    population: number;
    gini: Record<number, number>;
    fifa: string;
    car: {
      signs: string[];
      side: string;
    };
    timezones: string[];
    continents: Continent[];
    flags: {
      png: string;
      svg: string;
      alt: string;
    };
    coatOfArms: {
      png: string;
      svg: string;
    };
    startOfWeek: string;
    capitalInfo: {
      latlng: number[];
    };
    postalCode: {
      format: string;
      regex: string;
    };
    borders: string[];
  }
  export enum Continent {
    Europe = "Europe",
    Africa = "Africa",
    Americas = "Americas",
    Oceania = "Oceania",
    Asia = "Asia",
  }
}
