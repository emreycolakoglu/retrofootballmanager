import PanelWithTitle from "../panel-with-title/panel-with-title";
import styles from "./alert-modal.module.scss";

export interface AlertModalProps {
  title: string;
  titleAlign?: "center" | "left" | "right" | undefined;
  message: string;
  onOkay?: () => void;
  onCancel?: () => void;
}

export function AlertModal(props: AlertModalProps) {
  return (
    <div className={styles["errorModal"]}>
      <PanelWithTitle
        title={props.title}
        titleAlign={props.titleAlign}
        className={styles["container"]}
      >
        <p>{props.message}</p>
      </PanelWithTitle>
      <div className={styles["buttons"]}>
        {props.onOkay && (
          <button className={styles["button"]} onClick={props.onOkay}>
            Okay
          </button>
        )}
        {props.onCancel && (
          <button className={styles["button"]} onClick={props.onCancel}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
