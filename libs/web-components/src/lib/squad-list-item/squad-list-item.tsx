import { IPlayer } from "@futbolico/utility-game-models";
import { ReactNode, useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./squad-list-item.module.scss";

/* eslint-disable-next-line */
export interface SquadListItemProps {
  buttonNode: ReactNode;
  statusNode?: ReactNode;
  player: IPlayer;
}

export function SquadListItem(props: SquadListItemProps) {
  const name = useMemo(() => {
    return `${props.player?.lastName}, ${props.player?.firstName[0]}`;
  }, [props.player]);

  const positionLabel = useMemo(() => {
    return calculatePlayerPositionLabel(props.player?.position);
  }, [props.player]);

  return (
    <div className={styles["container"]}>
      <div className={styles["buttonPosition"]}>{props.buttonNode}</div>
      <div className={styles["statusPosition"]}>{props.statusNode}</div>
      <Link to={`/player/${props.player.id}`} className={styles["playerLink"]}>
        <div className={styles["namePosition"]}>{name}</div>
        <div className={styles["posPosition"]}>{positionLabel}</div>
      </Link>
    </div>
  );
}

function calculatePlayerPositionLabel(position: IPlayer["position"]): string {
  const positions: string[] = [];
  const sides: string[] = [];

  if (position.goalkeeper > 15) {
    positions.push("GK");
    return `${positions.join("/")} ${sides.join("")}`;
  }
  if (position.defence > 15) {
    positions.push("D");
  }
  if (position.defensiveMid > 15) {
    positions.push("DM");
  }
  if (position.midfield > 15) {
    positions.push("M");
  }
  if (position.attackingMid > 15) {
    positions.push("AM");
  }
  if (position.forward > 15) {
    positions.push("F");
  }

  if (position.side.right > 15) {
    sides.push("R");
  }
  if (position.side.left > 15) {
    sides.push("L");
  }
  if (position.side.center > 15) {
    sides.push("C");
  }

  return `${positions.join("/")} ${sides.join("")}`;
}
