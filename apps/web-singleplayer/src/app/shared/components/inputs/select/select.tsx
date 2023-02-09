import classNames from "classnames";
import styles from "./select.module.scss";

/* eslint-disable-next-line */
export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export function Select(props: SelectProps) {
  const { label, className, style, ...inputProps } = props;
  return (
    <div
      className={classNames(styles["inputGroup"], props.className)}
      style={style}
    >
      <label htmlFor={props.id}>{label}</label>
      <select {...inputProps}></select>
    </div>
  );
}
