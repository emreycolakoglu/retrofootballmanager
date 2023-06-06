import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./layout.module.scss";

/* eslint-disable-next-line */
export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  layoutClass?: string;
  sideNode?: ReactNode;
  sideNodeClass?: string;
  contentClass?: string;
  footerNode?: ReactNode;
  footerClass?: string;
}

export function Layout(props: LayoutProps) {
  return (
    <div className={classNames(styles["layout"], props.layoutClass)}>
      <div className={classNames(styles["sidebar"], props.sideNodeClass)}>
        {props.sideNode}
      </div>
      <div className={classNames(styles["content"], props.contentClass)}>
        {props.children}
      </div>
      <div className={classNames(styles["footer"], props.footerClass)}>
        {props.footerNode}
      </div>
    </div>
  );
}
