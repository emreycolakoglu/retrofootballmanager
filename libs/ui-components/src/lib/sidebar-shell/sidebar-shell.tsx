import classNames from "classnames";
import styles from "./sidebar-shell.module.scss";

/* eslint-disable-next-line */
export interface SidebarShellProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarShell(props: SidebarShellProps) {
  return (
    <div className={classNames(styles["sidebar"], props.className)}>
      {props.children}
    </div>
  );
}
