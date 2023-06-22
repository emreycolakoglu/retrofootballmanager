import {
  generatePlayer,
  PlayerPosition,
  PlayerQuality,
  PlayerStyle,
} from "@rfm/utility-factories";
import { Header, HeaderPrimaryLine } from "@rfm/ui-components";
import { PlayerDetailTopBar } from "../../components/playerDetailTopBar/playerDetailTopBar";
import { Route, Routes, useParams } from "react-router-dom";
import { PlayerAttributesRow } from "../../components/playerAttributesRow/playerAttributesRow";
import db from "@rfm/dexie-database";
import { useEffect, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";

export default function PlayerDetailView() {
  const params = useParams<{ id: string }>();
  const player = useLiveQuery(
    () => db.players.get(parseInt(params.id as string)),
    [params.id]
  );
  const club = useLiveQuery(() => db.clubs.get(player?.club || 0), [player]);

  return (
    <>
      <Header
        backgroundColor={club?.colors.homeColors.main}
        textColor={club?.colors.homeColors.secondary}
      >
        <HeaderPrimaryLine title={`${player?.firstName} ${player?.lastName}`} />
      </Header>

      <PlayerDetailTopBar player={player} />

      <Routes>
        <Route path="/" element={<PlayerAttributesRow player={player} />} />
      </Routes>
    </>
  );
}
