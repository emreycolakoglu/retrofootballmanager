import styles from "./header-secondary-line.module.scss";

/* eslint-disable-next-line */
export interface HeaderSecondaryLineProps {
  subtitle?: string;
}

export function HeaderSecondaryLine(props: HeaderSecondaryLineProps) {
  return <h3 className={styles["secondaryHeaderLine"]}>{props.subtitle}</h3>;
}
