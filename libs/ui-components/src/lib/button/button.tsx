import styles from "./button.module.scss";

/* eslint-disable-next-line */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return (
    <button className={styles["button"]} style={props.style}>
      {props.children}
    </button>
  );
}
