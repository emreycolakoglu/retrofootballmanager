import styles from "./header-primary-line.module.scss";

/* eslint-disable-next-line */
export interface HeaderPrimaryLineProps {
  title?: string;
}

export function HeaderPrimaryLine(props: HeaderPrimaryLineProps) {
  return <h2 className={styles["primaryHeaderLine"]}>{props.title}</h2>;
}
