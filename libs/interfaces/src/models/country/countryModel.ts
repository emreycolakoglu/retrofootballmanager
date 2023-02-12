export namespace CountryModel {
  export interface Base {
    id?: number;
    name: string;
    alpha2Code: string;
    alpha3Code: string;
    continentId: number;
    prestige: number;
    availableToPlay: boolean;
    flag?: string;
  }
}
