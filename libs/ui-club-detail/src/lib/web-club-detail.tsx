import styles from "./web-club-detail.module.scss";

/* eslint-disable-next-line */
export interface WebClubDetailProps {}

export function WebClubDetail(props: WebClubDetailProps) {
  return (
    <div className={styles["container"]}>
      <h1>Welcome to WebClubDetail!</h1>
    </div>
  );
}

export default WebClubDetail;
