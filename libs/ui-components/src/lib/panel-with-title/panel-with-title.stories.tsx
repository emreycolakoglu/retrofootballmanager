import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PanelWithTitle } from "./panel-with-title";

export default {
  component: PanelWithTitle,
  title: "PanelWithTitle",
} as ComponentMeta<typeof PanelWithTitle>;

const Template: ComponentStory<typeof PanelWithTitle> = (args) => (
  <PanelWithTitle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "",
};
