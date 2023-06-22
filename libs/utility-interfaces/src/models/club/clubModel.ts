export namespace ClubModel {
  export interface Base {
    id?: number;
    name: string;
    prestige: ClubPrestige;
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

  export interface ClubPrestige {
    local: number;
    global: number;
  }
}
