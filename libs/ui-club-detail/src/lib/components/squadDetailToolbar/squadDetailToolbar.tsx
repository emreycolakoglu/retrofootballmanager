import { Dropdown } from "@rfm/ui-components";
import React, { ReactElement } from "react";
import styles from "./squadDetailToolbar.module.scss";
import { TbTriangleInvertedFilled } from "react-icons/tb";

export const SquadDetailToolbar = (props: Props): ReactElement => {
  return (
    <div className={styles["bar"]}>
      <Dropdown
        triggerNode={
          <button className={styles["button"]}>
            View <TbTriangleInvertedFilled size={8} />
          </button>
        }
        menuItems={[
          {
            label: "Main",
            onClick: props.onMainSquadClicked,
          },
          {
            label: "Reserves",
            onClick: props.onReserveSquadClicked,
          },
          {
            label: "Youth",
            onClick: props.onYouthSquadClicked,
          },
        ]}
      />

      <Dropdown
        triggerNode={
          <button className={styles["button"]}>
            Sort <TbTriangleInvertedFilled size={8} />
          </button>
        }
      />

      <Dropdown
        triggerNode={
          <button className={styles["button"]}>
            Team <TbTriangleInvertedFilled size={8} />
          </button>
        }
      />
    </div>
  );
};

interface Props {
  onMainSquadClicked: () => void;
  onReserveSquadClicked: () => void;
  onYouthSquadClicked: () => void;
}
