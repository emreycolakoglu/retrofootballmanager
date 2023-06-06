import { ReactElement } from "react";
import styles from "./header.module.scss";

/* eslint-disable-next-line */
export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
  textColor?: string;
}

export function Header(props: HeaderProps): ReactElement {
  return (
    <div
      className={[styles["header"], props.className].join(" ")}
      style={{
        backgroundColor: props.backgroundColor,
        color: props.textColor,
      }}
    >
      {props.children}
    </div>
  );
}
