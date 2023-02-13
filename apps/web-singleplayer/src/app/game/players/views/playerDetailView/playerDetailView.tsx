import {
  generatePlayer,
  PlayerPosition,
  PlayerQuality,
  PlayerStyle,
} from "@rfm/generators";
import { Header, HeaderPrimaryLine } from "../../../../shared/components";
import PlayerAttributesColumn from "../../components/playerAttributesColumn/playerAttributesColumn";
import styles from "./playerDetailView.module.scss";
import classNames from "classnames";
import { PlayerDetailTopBar } from "../../components/playerDetailTopBar/playerDetailTopBar";

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

      <div className={classNames("row", styles["player-attribute-row"])}>
        <div className="col-4">
          {player?.position?.goalkeeper > 15 ? (
            <PlayerAttributesColumn
              label={"Goalkeeping"}
              attributes={player?.goalkeeping}
            />
          ) : (
            <PlayerAttributesColumn
              label={"Technical"}
              attributes={player?.technical}
            />
          )}
        </div>
        <div className="col-4">
          <PlayerAttributesColumn
            label={"Mental"}
            attributes={player?.mental}
          />
        </div>
        <div className="col-4">
          <PlayerAttributesColumn
            label={"Physical"}
            attributes={player?.physical}
          />
        </div>
      </div>
    </>
  );
}
