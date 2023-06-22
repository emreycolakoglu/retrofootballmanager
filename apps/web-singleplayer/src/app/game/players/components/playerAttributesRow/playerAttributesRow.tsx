import { PlayerModel } from "@rfm/utility-interfaces";
import classNames from "classnames";
import { PlayerAttributesColumn } from "../playerAttributesColumn/playerAttributesColumn";
import styles from "./playerAttributesRow.module.scss";

export function PlayerAttributesRow(props: Props) {
  if (!props.player) return <></>;
  return (
    <div className={classNames("row", styles["player-attribute-row"])}>
      <div className="col-4">
        {props.player?.position?.goalkeeper > 15 ? (
          <PlayerAttributesColumn
            label={"Goalkeeping"}
            attributes={props.player?.goalkeeping}
            kind={"goalkeeping"}
          />
        ) : (
          <PlayerAttributesColumn
            label={"Technical"}
            attributes={props.player?.technical}
            kind={"technical"}
          />
        )}
      </div>
      <div className="col-4">
        <PlayerAttributesColumn
          label={"Mental"}
          attributes={props.player?.mental}
          kind={"mental"}
        />
      </div>
      <div className="col-4">
        <PlayerAttributesColumn
          label={"Physical"}
          attributes={props.player?.physical}
          kind={"physical"}
        />
      </div>
    </div>
  );
}

interface Props {
  player?: PlayerModel.Base;
}
