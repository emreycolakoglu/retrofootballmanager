import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FullScreenLoading } from "./full-screen-loading";

export default {
  component: FullScreenLoading,
  title: "FullScreenLoading",
} as ComponentMeta<typeof FullScreenLoading>;

const Template: ComponentStory<typeof FullScreenLoading> = (args) => (
  <FullScreenLoading {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
