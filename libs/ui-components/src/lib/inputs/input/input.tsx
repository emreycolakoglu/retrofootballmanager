import classNames from "classnames";
import styles from "./input.module.scss";

/* eslint-disable-next-line */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input(props: InputProps) {
  const { label, className, ...inputProps } = props;
  return (
    <div className={classNames(styles["inputGroup"], props.className)}>
      <label htmlFor={props.id}>{label}</label>
      <input {...inputProps}></input>
    </div>
  );
}
