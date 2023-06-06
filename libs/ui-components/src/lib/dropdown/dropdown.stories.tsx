import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "./dropdown";

export default {
  component: Dropdown,
  title: "Dropdown",
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  triggerNode: <button>trigger</button>,
  menuItems: [
    { label: "Sheff Wed Squad" },
    { label: "Sheff Wed Reserves Squad" },
    { label: "Sheff Web Under 19 Squad" },
    {},
    { label: "News" },
    { label: "English Second Division" },
    { label: "Club Confidence" },
    { label: "All Notes" },
    { label: "All Transfers" },
    { label: "Job Information" },
    {},
    { label: "Player/Staff Search" },
    { label: "Quick Search" },
    {},
    { label: "Manager Options" },
    {},
    { label: "Go On Holiday" },
    { label: "Resign From Club" },
    {},
    { label: "Retire" },
  ],
  menuContentProps: { side: "right", align: "start" },
};
