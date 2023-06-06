import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import styles from "./bg-switcher.module.scss";

/* eslint-disable-next-line */
export interface BgSwitcherProps extends PropsWithChildren {
  history: string;
}

export function BgSwitcher(props: BgSwitcherProps) {
  const [bgIndex, setBgIndex] = useState(0);

  const bgImages = useMemo(
    () => [
      "https://a.espncdn.com/photo/2020/0319/r681030_1296x729_16-9.jpg",
      "https://www.readingchronicle.co.uk/resources/images/9427467.jpg",
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/RTX7HJRN-770x433.png",
    ],
    []
  );

  useEffect(() => {
    setBgIndex(getRandomInt(bgImages.length));
  }, [props.history, bgImages]);

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <div
      className={styles["bgSwitcher"]}
      style={{
        backgroundImage: `url(${bgImages[bgIndex]})`,
      }}
    >
      <div className={styles["bgDarkShade"]}>{props.children}</div>
    </div>
  );
}
