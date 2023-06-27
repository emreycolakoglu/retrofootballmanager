import {
  Header,
  HeaderPrimaryLine,
  HeaderSecondaryLine,
} from "@rfm/ui-components";
import { calculatePlayerPositionName } from "@rfm/ui-player-detail";
import { ClubModel, ContractModel, PlayerModel } from "@rfm/utility-interfaces";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

export const PlayerHeader = (props: Props): ReactElement => {
  function getClubLink() {
    switch (props.playerRecord?.contract.contractSquad) {
      case ContractModel.ContractSquad.MAIN:
        return `/club/${props.club?.id}/squad/main`;
      case ContractModel.ContractSquad.RESERVES:
        return `/club/${props.club?.id}/squad/reserves`;
      case ContractModel.ContractSquad.YOUTH:
        return `/club/${props.club?.id}/squad/youth`;

      default:
        return "";
    }
  }

  function getClubName() {
    switch (props.playerRecord?.contract.contractSquad) {
      case ContractModel.ContractSquad.MAIN:
        return `(${props.club?.name})`;
      case ContractModel.ContractSquad.RESERVES:
        return `(${props.club?.name} Reserves)`;
      case ContractModel.ContractSquad.YOUTH:
        return `(${props.club?.name} Youth)`;

      default:
        return "";
    }
  }

  return (
    <Header
      backgroundColor={props.club?.colors.homeColors.main}
      textColor={props.club?.colors.homeColors.secondary}
    >
      <HeaderPrimaryLine
        title={
          <>
            <span>{`${props.playerRecord?.contract?.squadNumber}. ${props.playerRecord?.player.firstName} ${props.playerRecord?.player.lastName}`}</span>{" "}
            <Link to={getClubLink()}>{getClubName()}</Link>
          </>
        }
      />
      <HeaderSecondaryLine
        subtitle={`${calculatePlayerPositionName(
          props.playerRecord?.player.position
        )}, ${props.playerRecord?.player.nationality}, Age: ${
          props.playerRecord?.player.age
        }`}
      />
    </Header>
  );
};

interface Props {
  playerRecord?: PlayerModel.Base;
  club?: ClubModel.Base;
}
