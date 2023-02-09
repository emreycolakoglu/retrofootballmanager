import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HeaderSecondaryLine } from "./header-secondary-line";

export default {
  component: HeaderSecondaryLine,
  title: "HeaderSecondaryLine",
} as ComponentMeta<typeof HeaderSecondaryLine>;

const Template: ComponentStory<typeof HeaderSecondaryLine> = (args) => (
  <HeaderSecondaryLine {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  subtitle: "",
};
