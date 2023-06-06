import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HeaderPrimaryLine } from "../header-primary-line/header-primary-line";
import { HeaderSecondaryLine } from "../header-secondary-line/header-secondary-line";
import { Header } from "./header";

export default {
  component: Header,
  title: "Header",
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>
    <HeaderPrimaryLine title="Galatasaray SK." />
    <HeaderSecondaryLine subtitle="1st in Turkish Super League" />
  </Header>
);

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "#ff0000",
  textColor: "#ffff00",
};
