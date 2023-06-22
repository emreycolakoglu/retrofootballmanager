export namespace CountryModel {
  export interface Base {
    id?: string;
    name: string;
    alpha2Code: string;
    alpha3Code: string;
    continent: string;
    prestige: number;
    availableToPlay: boolean;
    flag?: string;
    languages: string[];
    currencies: string[];
  }
}
