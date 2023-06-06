import {
  generatePlayer,
  PlayerPosition,
  PlayerQuality,
  PlayerStyle,
} from "@rfm/factories";
import { Header, HeaderPrimaryLine } from "@rfm/web-components";
import { PlayerDetailTopBar } from "../../components/playerDetailTopBar/playerDetailTopBar";
import { Route, Routes } from "react-router-dom";
import { PlayerAttributesRow } from "../../components/playerAttributesRow/playerAttributesRow";
import db from "@rfm/dexie-database";
import { useEffect, useState } from "react";

export default function PlayerDetailView() {
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
    <>
      <Header backgroundColor="#FFFFFF" textColor="#000000">
        <HeaderPrimaryLine title={`${player?.firstName} ${player?.lastName}`} />
      </Header>

      <PlayerDetailTopBar player={player} />

      <Routes>
        <Route path="/" element={<PlayerAttributesRow player={player} />} />
      </Routes>
    </>
  );
}
