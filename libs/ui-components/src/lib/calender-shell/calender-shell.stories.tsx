import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CalenderShell } from "./calender-shell";

export default {
  component: CalenderShell,
  title: "CalenderShell",
} as ComponentMeta<typeof CalenderShell>;

const Template: ComponentStory<typeof CalenderShell> = (args) => (
  <CalenderShell {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  line1: "",
  line2: "",
  line3: "",
};
