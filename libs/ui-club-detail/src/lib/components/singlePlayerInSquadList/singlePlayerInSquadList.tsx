import React, { ReactElement } from "react";
import styles from "./singlePlayerInSquadList.module.scss";
import { Link } from "react-router-dom";
import { Button } from "@rfm/ui-components";
import { PlayerModel } from "@rfm/utility-interfaces";
import {
  calculatePlayerNameLabel,
  calculatePlayerPositionLabel,
} from "@rfm/ui-player-detail";

export const SinglePlayerInSquadList = (props: Props): ReactElement => {
  return (
    <div className={styles["single-player-in-squad-list"]}>
      <div className={styles["selection-button-wrapper"]}>
        <Button className={styles["btn lightBlue"]}>&nbsp;</Button>
      </div>
      <div className={styles["status-wrapper"]}></div>
      <Link
        to={`/player/${props.player.id}`}
        className={styles["player-detail-link"]}
      >
        <div className={styles["player-name"]}>
          {calculatePlayerNameLabel(props.player.player)}
        </div>
        <div className={styles["player-position"]}>
          {calculatePlayerPositionLabel(props.player.player.position)}
        </div>
      </Link>
    </div>
  );
};

interface Props {
  player: PlayerModel.Base;
}
