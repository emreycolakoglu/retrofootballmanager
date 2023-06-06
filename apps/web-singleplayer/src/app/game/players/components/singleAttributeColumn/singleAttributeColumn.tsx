import { PlayerModel } from "@rfm/utility-interfaces";
import classNames from "classnames";
import React, { ReactElement } from "react";
import styles from "./singleAttributeColumn.module.scss";

export const SingleAttributeInColumn = (props: Props): ReactElement => {
  //const { t } = useTranslation("cm");

  // console.log(props.kind);

  const excpCssClassDict = {
    physical: "excpPhy",
    mental: "excpMent",
    goalkeeping: "excpGoal",
    technical: "excpTech",
  };

  return (
    <div className={styles["single-player-attribute-line"]}>
      <div className={styles.label}>{props.label}</div>
      <div
        className={classNames(styles.value, {
          [styles[excpCssClassDict[props.kind]]]: props.value >= 15,
        })}
      >
        {props.value}
      </div>
    </div>
  );
};

interface Props {
  label: string;
  value: number;
  kind: "technical" | "goalkeeping" | "mental" | "physical";
}
