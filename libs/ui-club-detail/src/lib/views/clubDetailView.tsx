import { ReactElement, useEffect, useState } from "react";
import { Route, RouteProps, Routes, useLocation } from "react-router-dom";
import ClubDetailTopBar from "../components/clubDetailTopBar/clubDetailTopBar";
import { ClubSquadView } from "./clubSquadView";
import db from "@rfm/dexie-database";
import {
  generatePlayer,
  PlayerPosition,
  PlayerStyle,
  PlayerQuality,
} from "@rfm/utility-factories";

export const ClubDetailView = (props: RouteProps): ReactElement => {
  const club = {
    id: 2,
  } as any;
  const players = [] as any;
  const location = useLocation();

  const [player, setPlayer] = useState<any>();

  useEffect(() => {
    async function generate() {
      const firstNames = await db.firstNames
        .filter((x) => x.language == "TUR")
        .toArray();
      const lastNames = await db.lastNames
        .filter((x) => x.language == "TUR")
        .toArray();
      const _player = {
        ...generatePlayer({
          nationality: {
            name: "Türkiye",
            alpha2Code: "TR",
            alpha3Code: "TRY",
            availableToPlay: true,
            continent: "Europe",
            prestige: 500,
            languages: [],
            currencies: [],
          },
          ageTemplate: { min: 17, max: 25 },
          position: PlayerPosition.CENTERBACK,
          style: PlayerStyle.STRONG_DEFENDER,
          clubId: "1",
          quality: PlayerQuality.VERYGOOD,
          firstNames: firstNames.map((x) => x.value),
          lastNames: lastNames.map((x) => x.value),
        }),
        id: 123,
      };
      setPlayer(_player);
    }
    generate();
  }, []);

  return (
    <div
    // forceAuth={true}
    // pageTitle={club?.name || ""}
    // title={club?.name || ""}
    // subtitle="1st in Premier League"
    // textColor={club?.colors.homeColors.main}
    // backgroundColor={club?.colors.homeColors.secondary}
    >
      <ClubDetailTopBar club={club} />

      <Routes location={location}>
        <Route
          path="/"
          element={<ClubSquadView club={club} players={[player]} />}
        />
        {/* <Route
          path="/club/:id/staff"
          exact
          render={() => <ClubStaffView club={club} />}
        />
        <Route
          path="/club/:id/information"
          exact
          render={() => <ClubInformationView club={club} />}
        />
        <Route
          path="/club/:id/finances"
          exact
          render={() => <ClubFinanceView club={club} />}
        />
        <Route
          path="/club/:id/fixtures"
          exact
          render={() => <ClubFixtureView club={club} />}
        />
        <Route
          path="/club/:id/transfers"
          exact
          render={() => <ClubTransferView club={club} />}
        /> */}
      </Routes>
    </div>
  );
};
