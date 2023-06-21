import { ReactElement, useEffect, useState } from "react";
import { Route, RouteProps, Routes, useLocation } from "react-router-dom";
import ClubDetailTopBar from "../components/clubDetailTopBar/clubDetailTopBar";
import { ClubSquadView } from "./clubSquadView";
import db from "@rfm/dexie-database";
import { generateStarterFirstTeamSquad } from "@rfm/utility-factories";

export const ClubDetailView = (props: RouteProps): ReactElement => {
  const club = {
    id: 2,
  } as any;

  const location = useLocation();

  const [players, setPlayers] = useState<any>();

  useEffect(() => {
    async function generate() {
      const firstNames = await db.firstNames
        .filter((x) => x.language == "TUR")
        .toArray();
      const lastNames = await db.lastNames
        .filter((x) => x.language == "TUR")
        .toArray();
      const _players = generateStarterFirstTeamSquad({
        firstNames: firstNames.map((f) => f.value),
        lastNames: lastNames.map((f) => f.value),
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
      });
      setPlayers(_players);
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
          element={<ClubSquadView club={club} players={players} />}
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
