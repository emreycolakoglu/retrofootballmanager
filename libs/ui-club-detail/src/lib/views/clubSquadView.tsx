import { Button, Dropdown, PanelWithTitle, Select } from "@rfm/ui-components";
import { ClubModel, PlayerModel } from "@rfm/utility-interfaces";
import React, { ReactElement } from "react";
import { SinglePlayerInSquadList } from "../components";
import { SquadDetailToolbar } from "../components/squadDetailToolbar/squadDetailToolbar";

export const ClubSquadView = (props: Props): ReactElement => {
  return (
    <div className="row">
      <div className="col-12">
        <SquadDetailToolbar />
      </div>
      <div className="col-12">
        <PanelWithTitle title="Players">
          <div className="row">
            {props.players
              ?.filter((p) => !!p)
              ?.map((player, i) => (
                <SinglePlayerInSquadList player={{ ...player }} key={i} />
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
