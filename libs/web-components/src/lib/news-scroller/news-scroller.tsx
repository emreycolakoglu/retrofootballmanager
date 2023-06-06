/* eslint-disable @typescript-eslint/no-empty-function */
import styles from "./news-scroller.module.scss";
import Marquee from "react-fast-marquee";
import { MouseEvent } from "react";

/* eslint-disable-next-line */
export interface NewsScrollerProps {
  news: {
    label: string;
    onClick?: (_e: MouseEvent<HTMLDivElement>) => void;
  }[];
}

export function NewsScroller(props: NewsScrollerProps) {
  return (
    <div className={styles["footerScroller"]}>
      <div className={styles["footerScrollerInside"]}>
        <Marquee speed={50} direction="left" gradient={false} pauseOnHover>
          {props.news?.map((n, i) => (
            <div className={styles["scrollerItem"]} key={i} onClick={n.onClick}>
              {n.label}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default NewsScroller;
