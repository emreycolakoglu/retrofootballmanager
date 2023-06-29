import db from "@rfm/dexie-database";
import { ClubSquadUI } from "@rfm/ui-club-detail";
import { ContractModel } from "@rfm/utility-interfaces";
import { useLiveQuery } from "dexie-react-hooks";
import React, { ReactElement } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

export const ClubSquadView = (): ReactElement => {
  const location = useLocation();
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

  return (
    <>
      <Routes location={location}>
        <Route
          path="/"
          element={<ClubSquadUI club={club} players={firstTeamPlayers} />}
        />
        <Route
          path="/main"
          element={<ClubSquadUI club={club} players={firstTeamPlayers} />}
        />
        <Route
          path="/reserves"
          element={<ClubSquadUI club={club} players={reserveTeamPlayers} />}
        />
        <Route
          path="/youth"
          element={<ClubSquadUI club={club} players={youthTeamPlayers} />}
        />
      </Routes>
    </>
  );
};
