import styles from "./version-label.module.scss";

export function VersionLabel(props: Props) {
  return <div className={styles["version-label"]}>{props.version}</div>;
}

interface Props {
  version: string;
}
