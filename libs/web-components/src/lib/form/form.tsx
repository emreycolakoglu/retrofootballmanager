import classNames from "classnames";
import PanelWithTitle from "../panel-with-title/panel-with-title";
import styles from "./form.module.scss";

/* eslint-disable-next-line */
export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  legendAlign?: "left" | "center" | "right";
  legendSize?: "small" | "normal";
  legend: string;
}

export function Form(props: FormProps) {
  return (
    <form
      className={classNames(styles["form"], props.className)}
      onSubmit={props.onSubmit}
      style={props.style}
    >
      <PanelWithTitle
        title={props.legend}
        titleAlign={props.legendAlign}
        titleSize={props.legendSize}
      >
        {props.children}
      </PanelWithTitle>
    </form>
  );
}

Form.defaultProps = {
  legendAlign: "left",
  legendSize: "normal",
};
