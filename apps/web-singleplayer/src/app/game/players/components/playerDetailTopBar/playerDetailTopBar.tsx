import { PlayerModel } from "@rfm/interfaces";
import classNames from "classnames";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { ButtonGroup } from "../../../../shared/components";
import styles from "./playerDetailTopBar.module.scss";

export const PlayerDetailTopBar = (props: Props): ReactElement => {
  const { t } = useTranslation("cm");

  return (
    <div className={classNames("row", styles.playerDetailTopBar)}>
      <div className="col-12">
        <ButtonGroup>
          <NavLink
            to={`/player/${props.player?.id}`}
            className={({ isActive }) =>
              isActive ? styles.active : styles.button
            }
            end
          >
            {t("Profile")}
          </NavLink>
          <NavLink
            to={`/player/${props.player?.id}/information`}
            className={({ isActive }) =>
              isActive ? styles.active : styles.button
            }
          >
            {t("Information")}
          </NavLink>
          <NavLink
            to={`/player/${props.player?.id}/form`}
            className={({ isActive }) =>
              isActive ? styles.active : styles.button
            }
          >
            {t("Form")}
          </NavLink>
          <NavLink
            to={`/player/${props.player?.id}/history`}
            className={({ isActive }) =>
              isActive ? styles.active : styles.button
            }
          >
            {t("History")}
          </NavLink>
        </ButtonGroup>
      </div>
    </div>
  );
};

interface Props {
  player?: PlayerModel.Base;
}
