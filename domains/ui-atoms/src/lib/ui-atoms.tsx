import styles from "./ui-atoms.module.scss";

/* eslint-disable-next-line */
export interface UiAtomsProps {}

export function UiAtoms(props: UiAtomsProps) {
  return (
    <div className={styles["container"]}>
      <h1>Welcome to UiAtoms!</h1>
    </div>
  );
}

export default UiAtoms;
