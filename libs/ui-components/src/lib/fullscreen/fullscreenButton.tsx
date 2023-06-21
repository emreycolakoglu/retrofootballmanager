import React, { ReactElement } from "react";
import styles from "./fullscreenButton.module.scss";

export const FullscreenButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
): ReactElement => {
  return (
    <button className={styles.fullscreen} onClick={props.onClick}>
      Fullscreen
    </button>
  );
};
