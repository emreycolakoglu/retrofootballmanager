import styles from "./web-landing-single.module.scss";

/* eslint-disable-next-line */
export interface WebLandingSingleProps {}

export function WebLandingSingle(props: WebLandingSingleProps) {
  return (
    <div className={styles["container"]}>
      <h1>Welcome to WebLandingSingle!</h1>
    </div>
  );
}

export default WebLandingSingle;
