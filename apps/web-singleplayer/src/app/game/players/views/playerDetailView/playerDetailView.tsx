import { PlayerDetailTopBar } from "../../components/playerDetailTopBar/playerDetailTopBar";
import { Route, Routes, useParams } from "react-router-dom";
import { PlayerAttributesRow } from "../../components/playerAttributesRow/playerAttributesRow";
import db from "@rfm/dexie-database";
import { useLiveQuery } from "dexie-react-hooks";
import { PlayerHeader } from "../../components";

export default function PlayerDetailView() {
  const params = useParams<{ id: string }>();
  const playerRecord = useLiveQuery(
    () => db.players.get(parseInt(params.id as string)),
    [params.id]
  );
  const club = useLiveQuery(
    () => db.clubs.get(playerRecord?.contract.clubId || 0),
    [playerRecord]
  );

  return (
    <>
      <PlayerHeader playerRecord={playerRecord} club={club} />

      <PlayerDetailTopBar player={playerRecord} />

      <Routes>
        <Route
          path="/"
          element={<PlayerAttributesRow player={playerRecord?.player} />}
        />
      </Routes>
    </>
  );
}
