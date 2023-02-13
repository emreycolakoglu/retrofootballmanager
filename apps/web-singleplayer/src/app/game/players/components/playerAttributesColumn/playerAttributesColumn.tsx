import { PlayerModel } from "@rfm/interfaces";
import { PanelWithTitle } from "../../../../shared/components";
import React, { ReactElement } from "react";
import { SingleAttributeInColumn } from "../singleAttributeColumn/singleAttributeColumn";

const PlayerAttributesColumn = (props: Props): ReactElement => {
  function printAttributes() {
    if (!props.attributes) return;

    const result: ReactElement[] = [];
    for (const key in props.attributes) {
      if (Object.prototype.hasOwnProperty.call(props.attributes, key)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const element = props.attributes[key];
        result.push(
          <SingleAttributeInColumn key={key} label={key} value={element} />
        );
      }
    }

    return result;
  }
  return (
    <PanelWithTitle title={props.label}>{printAttributes()}</PanelWithTitle>
  );
};

interface Props {
  label: string;
  attributes?:
    | PlayerModel.TechnicalSkills
    | PlayerModel.GoalkeepingSkills
    | PlayerModel.MentalSkills
    | PlayerModel.PhysicalSkills;
}

export default PlayerAttributesColumn;
