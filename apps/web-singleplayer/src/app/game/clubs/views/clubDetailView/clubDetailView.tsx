import { ReactElement, useEffect, useState } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import db from "@rfm/dexie-database";
import { useLiveQuery } from "dexie-react-hooks";
import { Header, HeaderPrimaryLine } from "@rfm/ui-components";
import { ContractModel } from "@rfm/utility-interfaces";
import { ClubSquadView, ClubDetailTopBar } from "@rfm/ui-club-detail";

const ClubDetailView = (): ReactElement => {
  const params = useParams<{ id: string }>();
  const club = useLiveQuery(
    () => db.clubs.get(parseInt(params.id as string)),
    [params.id]
  );

  const firstTeamPlayers = useLiveQuery(
    () =>
      db.players
        .filter(
          (record) =>
            record.contract.clubId == club?.id &&
            record.contract.contractSquad == ContractModel.ContractSquad.MAIN
        )
        .toArray(),
    [club?.id]
  );

  const reserveTeamPlayers = useLiveQuery(
    () =>
      db.players
        .filter(
          (record) =>
            record.contract.clubId == club?.id &&
            record.contract.contractSquad ==
              ContractModel.ContractSquad.RESERVES
        )
        .toArray(),
    [club?.id]
  );

  const youthTeamPlayers = useLiveQuery(
    () =>
      db.players
        .filter(
          (record) =>
            record.contract.clubId == club?.id &&
            record.contract.contractSquad == ContractModel.ContractSquad.YOUTH
        )
        .toArray(),
    [club?.id]
  );

  const location = useLocation();

  return (
    <div>
      <Header
        backgroundColor={club?.colors.homeColors.main}
        textColor={club?.colors.homeColors.secondary}
      >
        <HeaderPrimaryLine title={club?.name} />
      </Header>

      <ClubDetailTopBar club={club} />

      <Routes location={location}>
        <Route
          path="/squad"
          element={<ClubSquadView club={club} players={firstTeamPlayers} />}
        />
        <Route
          path="/squad/main"
          element={<ClubSquadView club={club} players={firstTeamPlayers} />}
        />
        <Route
          path="/squad/reserves"
          element={<ClubSquadView club={club} players={reserveTeamPlayers} />}
        />
        <Route
          path="/squad/youth"
          element={<ClubSquadView club={club} players={youthTeamPlayers} />}
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

export default ClubDetailView;
