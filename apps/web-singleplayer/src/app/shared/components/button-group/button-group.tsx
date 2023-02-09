import classNames from "classnames";
import { PropsWithChildren } from "react";
import styles from "./button-group.module.scss";

/* eslint-disable-next-line */
export interface ButtonGroupProps extends PropsWithChildren {
  className?: string;
}

export function ButtonGroup(props: ButtonGroupProps) {
  return (
    <div className={classNames(styles["button-group"], props.className)}>
      {props.children}
    </div>
  );
}
