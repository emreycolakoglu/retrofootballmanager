export namespace ClubModel {
  export interface Base {
    id?: number;
    name: string;
    user: string;
    prestige: number;
    colors: {
      homeColors: {
        main: string;
        secondary: string;
      };
      awayColors: {
        main: string;
        secondary: string;
      };
    };
  }
}
