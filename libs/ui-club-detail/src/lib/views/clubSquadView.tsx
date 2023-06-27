import { Button, Dropdown, PanelWithTitle, Select } from "@rfm/ui-components";
import { ClubModel, PlayerModel } from "@rfm/utility-interfaces";
import React, { ReactElement } from "react";
import { SinglePlayerInSquadList } from "../components";
import { SquadDetailToolbar } from "../components/squadDetailToolbar/squadDetailToolbar";
import { useNavigate, useNavigation } from "react-router-dom";

export const ClubSquadView = (props: Props): ReactElement => {
  const navigation = useNavigate();

  return (
    <div className="row">
      <div className="col-12">
        <SquadDetailToolbar
          onMainSquadClicked={() =>
            navigation(`/club/${props.club?.id}/squad/main`)
          }
          onReserveSquadClicked={() =>
            navigation(`/club/${props.club?.id}/squad/reserves`)
          }
          onYouthSquadClicked={() =>
            navigation(`/club/${props.club?.id}/squad/youth`)
          }
        />
      </div>
      <div className="col-12">
        <PanelWithTitle title="Players">
          <div className="row">
            {props.players
              ?.filter((p) => !!p)
              ?.map((player, i) => (
                <SinglePlayerInSquadList player={player} key={i} />
              ))}
          </div>
        </PanelWithTitle>
      </div>
    </div>
  );
};

interface Props {
  club?: ClubModel.Base;
  players?: PlayerModel.Base[];
}
