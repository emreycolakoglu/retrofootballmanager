import styles from "./prev-next-buttons.module.scss";
import { TbTriangleInvertedFilled } from "react-icons/tb";

/* eslint-disable-next-line */
export interface PrevNextButtonsProps {
  onPrev?: () => void;
  onNext?: () => void;
}

export function PrevNextButtons(props: PrevNextButtonsProps) {
  return (
    <div className={styles["prevNextWrapper"]}>
      <button className="transparent sm" onClick={props.onPrev}>
        <TbTriangleInvertedFilled style={{ transform: "rotate(90deg)" }} />
      </button>
      <button className="transparent sm" onClick={props.onNext}>
        <TbTriangleInvertedFilled style={{ transform: "rotate(-90deg)" }} />
      </button>
    </div>
  );
}
