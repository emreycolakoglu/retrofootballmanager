import { PlayerModel } from "@rfm/utility-interfaces";
import { PanelWithTitle } from "@rfm/ui-components";
import React, { ReactElement } from "react";
import { SingleAttributeInColumn } from "../singleAttributeColumn/singleAttributeColumn";

export const PlayerAttributesColumn = (props: Props): ReactElement => {
  function printAttributes() {
    if (!props.attributes) return;

    const result: ReactElement[] = [];
    for (const key in props.attributes) {
      if (Object.prototype.hasOwnProperty.call(props.attributes, key)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const element = props.attributes[key];
        result.push(
          <SingleAttributeInColumn
            key={key}
            label={key}
            value={element}
            kind={props.kind}
          />
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
  kind: "technical" | "goalkeeping" | "mental" | "physical";
}
