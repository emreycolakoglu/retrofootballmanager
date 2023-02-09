import classNames from "classnames";
import styles from "./panel-with-title.module.scss";

/* eslint-disable-next-line */
export interface PanelWithTitleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  titleAlign?: "left" | "center" | "right";
  title: string;
  titleSize?: "normal" | "small";
}

export function PanelWithTitle(props: PanelWithTitleProps) {
  return (
    <fieldset
      className={classNames(props.className, styles["fieldset"])}
      style={props.style}
    >
      {props.title ? (
        <legend
          className={classNames(
            styles[props.titleAlign || ""],
            styles[props.titleSize || ""]
          )}
        >
          {props.title}
        </legend>
      ) : null}
      {props.children}
    </fieldset>
  );
}

export default PanelWithTitle;
