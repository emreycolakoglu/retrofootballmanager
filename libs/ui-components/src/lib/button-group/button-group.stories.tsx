import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../button/button";
import { ButtonGroup } from "./button-group";

export default {
  component: ButtonGroup,
  title: "ButtonGroup",
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button>TEST</Button>
    <Button>TEST</Button>
    <Button>TEST</Button>
    <Button>TEST</Button>
    <Button>TEST</Button>
  </ButtonGroup>
);

export const Primary = Template.bind({});
Primary.args = {};
