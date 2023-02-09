import styles from "./prev-next-buttons.module.scss";

/* eslint-disable-next-line */
export interface PrevNextButtonsProps {
  onPrev?: () => void;
  onNext?: () => void;
}

export function PrevNextButtons(props: PrevNextButtonsProps) {
  return (
    <div className={styles["prevNextWrapper"]}>
      <button className="transparent sm" onClick={props.onPrev}>
        {"<"}
      </button>
      <button className="transparent sm" onClick={props.onNext}>
        {">"}
      </button>
    </div>
  );
}
