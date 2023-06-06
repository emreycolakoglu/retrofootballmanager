import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../button/button";
import { SquadListItem } from "./squad-list-item";

export default {
  component: SquadListItem,
  title: "SquadListItem",
} as ComponentMeta<typeof SquadListItem>;

const Template: ComponentStory<typeof SquadListItem> = (args) => (
  <>
    <SquadListItem {...args} />
    <SquadListItem {...args} />
    <SquadListItem {...args} />
    <SquadListItem {...args} />
    <SquadListItem {...args} />
    <SquadListItem {...args} />
    <SquadListItem {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  player: {
    firstName: "Tunay",
    lastName: "Sararer",
    nationality: "62cd494d2914100125afb96d",
    age: 37,
    technical: {
      crossing: 2,
      dribbling: 7,
      finishing: 3,
      heading: 1,
      longShots: 5,
      longThrows: 10,
      marking: 5,
      passing: 2,
      penaltyTaking: 4,
      setPieces: 7,
      tackling: 3,
      technique: 4,
    },
    mental: {
      aggression: 2,
      anticipation: 6,
      bravery: 4,
      creativity: 8,
      decisions: 2,
      determination: 3,
      flair: 10,
      influence: 10,
      offTheBall: 7,
      positioning: 10,
      teamWork: 6,
      workRate: 2,
    },
    physical: {
      acceleration: 2,
      agility: 8,
      balance: 3,
      jumping: 3,
      pace: 2,
      stamina: 3,
      strength: 9,
    },
    goalkeeping: {
      aerialAbility: 11,
      commandOfArea: 5,
      communication: 6,
      eccentricity: 9,
      handling: 11,
      kicking: 4,
      oneOnOnes: 8,
      reflexes: 9,
      rushingOut: 7,
      tendencyToPunch: 10,
      throwing: 7,
    },
    position: {
      goalkeeper: 20,
      defence: 1,
      defensiveMid: 1,
      midfield: 1,
      attackingMid: 1,
      forward: 1,
      side: { left: 1, center: 20, right: 1 },
    },
    prestige: { local: 185, global: 160 },
    contract: "62d50c73a7ee01bc08f66b83",
    club: "62d50c72a7ee01bc08f66b6a",
  },
  buttonNode: (
    <Button
      style={{
        minHeight: 22,
        height: 22,
        borderRadius: 5,
      }}
    >
      GK
    </Button>
  ),
  statusNode: <div>st</div>,
};
