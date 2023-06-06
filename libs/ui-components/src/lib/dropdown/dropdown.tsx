import { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styles from "./dropdown.module.scss";
import classNames from "classnames";

export function Dropdown(props: DropdownProps) {
  const {
    triggerNode,
    menuItems,
    contentClassName,
    menuContentProps,
    rootProps,
  } = props;

  return (
    <DropdownMenu.Root {...rootProps}>
      <DropdownMenu.Trigger
        children={triggerNode}
        data-testid="triggerContainer"
        asChild
      />
      <DropdownMenu.Content
        {...menuContentProps}
        className={classNames(styles["contentContainer"], contentClassName)}
      >
        <div className={styles["innerContentWrapper"]}>
          {menuItems?.map((item, index) => {
            if (item.label) {
              return (
                <DropdownMenu.Item
                  tabIndex={undefined}
                  key={index}
                  onClick={item.onClick}
                  className={classNames(
                    styles["itemContainer"],
                    item.className
                  )}
                >
                  {item.label}
                </DropdownMenu.Item>
              );
            } else {
              return (
                <DropdownMenu.Separator
                  key={index}
                  className={styles["seperator"]}
                  asChild
                >
                  <span />
                </DropdownMenu.Separator>
              );
            }
          })}
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

/* eslint-disable-next-line */
interface DropdownProps {
  triggerNode: ReactNode;
  menuItems?: IDropdownMenuItem[];
  contentClassName?: string;
  menuContentProps?: DropdownMenu.DropdownMenuContentProps;
  rootProps?: DropdownMenu.DropdownMenuProps;
}

interface IDropdownMenuItem {
  label?: string | React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
  children?: IDropdownMenuItem[];
}
