import React, { ReactElement } from "react";
import styles from "./clubDetailTopBar.module.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ButtonGroup } from "@rfm/ui-components";
import { ClubModel } from "@rfm/utility-interfaces";

export const ClubDetailTopBar = (props: Props): ReactElement => {
  const { t } = useTranslation("cm");

  return (
    <div className={"row " + styles["clubDetailTopBar"]}>
      <div className="col-12">
        <ButtonGroup>
          <NavLink
            to={`/club/${props.club?.id}`}
            className={({ isActive }) =>
              isActive ? styles.active : styles.button
            }
            end
          >
            {t("Squad")}
          </NavLink>
          <NavLink
            to={`/club/${props.club?.id}/staff`}
            className={({ isActive }) =>
              isActive ? styles.active : styles.button
            }
            end
          >
            {t("Staff")}
          </NavLink>
          <NavLink
            to={`/club/${props.club?.id}/information`}
            className={({ isActive }) =>
              isActive ? styles.active : styles.button
            }
            end
          >
            {t("Information")}
          </NavLink>
          <NavLink
            to={`/club/${props.club?.id}/finances`}
            className={({ isActive }) =>
              isActive ? styles.active : styles.button
            }
            end
          >
            {t("Finances")}
          </NavLink>
          <NavLink
            to={`/club/${props.club?.id}/fixtures`}
            className={({ isActive }) =>
              isActive ? styles.active : styles.button
            }
            end
          >
            {t("Fixtures")}
          </NavLink>
          <NavLink
            to={`/club/${props.club?.id}/transfers`}
            className={({ isActive }) =>
              isActive ? styles.active : styles.button
            }
            end
          >
            {t("Transfers")}
          </NavLink>
        </ButtonGroup>
      </div>
    </div>
  );
};

interface Props {
  club?: ClubModel.Base;
}
