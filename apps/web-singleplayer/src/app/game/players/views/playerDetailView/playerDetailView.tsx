import {
  generatePlayer,
  PlayerPosition,
  PlayerQuality,
  PlayerStyle,
} from "@rfm/generators";
import { Header, HeaderPrimaryLine } from "../../../../shared/components";
import { PlayerDetailTopBar } from "../../components/playerDetailTopBar/playerDetailTopBar";
import { Route, Routes } from "react-router-dom";
import { PlayerAttributesRow } from "../../components/playerAttributesRow/playerAttributesRow";

export default function PlayerDetailView() {
  const player = {
    ...generatePlayer({
      nationality: {
        name: "Türkiye",
        alpha2Code: "TR",
        alpha3Code: "TRY",
        availableToPlay: true,
        continentId: 0,
        prestige: 500,
      },
      ageTemplate: { min: 17, max: 25 },
      position: PlayerPosition.CENTERBACK,
      style: PlayerStyle.STRONG_DEFENDER,
      clubId: "1",
      quality: PlayerQuality.VERYGOOD,
    }),
    id: 123,
  };

  return (
    <>
      <Header backgroundColor="#FFFFFF" textColor="#000000">
        <HeaderPrimaryLine title="hello" />
      </Header>

      <PlayerDetailTopBar player={player} />

      <Routes>
        <Route path="/" element={<PlayerAttributesRow player={player} />} />
      </Routes>
    </>
  );
}
