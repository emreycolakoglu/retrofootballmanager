import React, { ReactElement } from "react";
import styles from "./singleAttributeColumn.module.scss";

export const SingleAttributeInColumn = (props: Props): ReactElement => {
  //const { t } = useTranslation("cm");

  return (
    <div className={styles["single-player-attribute-line"]}>
      <div className={styles.label}>{props.label}</div>
      <div className={styles.value}>{props.value}</div>
    </div>
  );
};

interface Props {
  label: any;
  value: any;
}
