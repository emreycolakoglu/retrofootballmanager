import classNames from "classnames";
import styles from "./calender-shell.module.scss";

/* eslint-disable-next-line */
export interface CalenderShellProps
  extends React.HTMLAttributes<HTMLDivElement> {
  line1?: string;
  line2?: string;
  line3?: string;
}

export function CalenderShell(props: CalenderShellProps) {
  return (
    <div className={classNames(styles["calendar"], props.className)}>
      <div className={styles["calendarRow"]}>{props.line1}</div>
      <div className={styles["calendarRow"]}>{props.line2}</div>
      <div className={styles["calendarRow"]}>{props.line3}</div>
    </div>
  );
}
