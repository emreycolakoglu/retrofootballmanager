import {
  Header,
  HeaderPrimaryLine,
  HeaderSecondaryLine,
} from "@rfm/ui-components";
import { PlayerDetailTopBar } from "../../components/playerDetailTopBar/playerDetailTopBar";
import { Route, Routes, useParams } from "react-router-dom";
import { PlayerAttributesRow } from "../../components/playerAttributesRow/playerAttributesRow";
import db from "@rfm/dexie-database";
import { useLiveQuery } from "dexie-react-hooks";
import { calculatePlayerPositionName } from "@rfm/ui-player-detail";

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
      <Header
        backgroundColor={club?.colors.homeColors.main}
        textColor={club?.colors.homeColors.secondary}
      >
        <HeaderPrimaryLine
          title={`${playerRecord?.contract?.squadNumber}. ${playerRecord?.player.firstName} ${playerRecord?.player.lastName} (${club?.name})`}
        />
        <HeaderSecondaryLine
          subtitle={`${calculatePlayerPositionName(
            playerRecord?.player.position
          )}, ${playerRecord?.player.nationality}, Age: ${
            playerRecord?.player.age
          }`}
        />
      </Header>

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
