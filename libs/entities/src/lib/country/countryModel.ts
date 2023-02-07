export namespace CountryModel {
  export interface Base {
    id?: string;
    name: string;
    alpha2Code: string;
    alpha3Code: string;
    continentId: number;
    prestige: number;
    availableToPlay: boolean;
    demonym: string;
    flag?: string;
    futheadId: number;
  }
}
