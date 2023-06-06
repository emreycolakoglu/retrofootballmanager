import styles from "./web-player-detail.module.scss";

/* eslint-disable-next-line */
export interface WebPlayerDetailProps {}

export function WebPlayerDetail(props: WebPlayerDetailProps) {
  return (
    <div className={styles["container"]}>
      <h1>Welcome to WebPlayerDetail!</h1>
    </div>
  );
}

export default WebPlayerDetail;
