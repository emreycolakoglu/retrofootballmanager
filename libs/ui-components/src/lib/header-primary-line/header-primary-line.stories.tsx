import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HeaderPrimaryLine } from "./header-primary-line";

export default {
  component: HeaderPrimaryLine,
  title: "HeaderPrimaryLine",
} as ComponentMeta<typeof HeaderPrimaryLine>;

const Template: ComponentStory<typeof HeaderPrimaryLine> = (args) => (
  <HeaderPrimaryLine {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "",
};
