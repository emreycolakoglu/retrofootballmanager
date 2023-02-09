import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Divider } from "./divider";

export default {
  component: Divider,
  title: "Divider",
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = () => <Divider />;

export const Primary = Template.bind({});
Primary.args = {};
