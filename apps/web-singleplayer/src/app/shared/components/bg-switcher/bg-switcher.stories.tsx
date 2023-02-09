import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BgSwitcher } from "./bg-switcher";

export default {
  component: BgSwitcher,
  title: "BgSwitcher",
} as ComponentMeta<typeof BgSwitcher>;

const Template: ComponentStory<typeof BgSwitcher> = (args) => (
  <BgSwitcher {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
