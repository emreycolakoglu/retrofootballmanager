import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SidebarShell } from "./sidebar-shell";

export default {
  component: SidebarShell,
  title: "SidebarShell",
} as ComponentMeta<typeof SidebarShell>;

const Template: ComponentStory<typeof SidebarShell> = (args) => (
  <SidebarShell {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
