import { ReactElement, useEffect, useState } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import ClubDetailTopBar from "../components/clubDetailTopBar/clubDetailTopBar";
import { ClubSquadView } from "./clubSquadView";
import db from "@rfm/dexie-database";
import { useLiveQuery } from "dexie-react-hooks";
import { Header, HeaderPrimaryLine } from "@rfm/ui-components";
import { ContractModel } from "@rfm/utility-interfaces";

export const ClubDetailView = (): ReactElement => {
  const params = useParams<{ id: string }>();
  const club = useLiveQuery(
    () => db.clubs.get(parseInt(params.id as string)),
    [params.id]
  );
  const contracts = useLiveQuery(
    () =>
      db.playerContracts
        .filter(
          (contract) =>
            contract.clubId == club?.id &&
            contract.contractSquad == ContractModel.ContractSquad.MAIN
        )
        .toArray(),
    [club?.id]
  );

  const players = useLiveQuery(
    () =>
      db.players
        .filter(
          (player) =>
            !!contracts?.find((contract) => contract.id == player.contract)
        )
        .toArray(),
    [contracts]
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
