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
  const player = useLiveQuery(
    () => db.players.get(parseInt(params.id as string)),
    [params.id]
  );
  const club = useLiveQuery(() => db.clubs.get(player?.club || 0), [player]);
  const contract = useLiveQuery(
    () => db.playerContracts.get(player?.contract || 0),
    [player]
  );

  return (
    <>
      <Header
        backgroundColor={club?.colors.homeColors.main}
        textColor={club?.colors.homeColors.secondary}
      >
        <HeaderPrimaryLine
          title={`${contract?.squadNumber}. ${player?.firstName} ${player?.lastName} (${club?.name})`}
        />
        <HeaderSecondaryLine
          subtitle={`${calculatePlayerPositionName(player?.position)}, ${
            player?.nationality
          }, Age: ${player?.age}`}
        />
      </Header>

      <PlayerDetailTopBar player={player} />

      <Routes>
        <Route path="/" element={<PlayerAttributesRow player={player} />} />
      </Routes>
    </>
  );
}
