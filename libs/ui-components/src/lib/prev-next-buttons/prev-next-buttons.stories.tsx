import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PrevNextButtons } from "./prev-next-buttons";

export default {
  component: PrevNextButtons,
  title: "PrevNextButtons",
  argTypes: {
    onPrev: { action: "onPrev executed!" },
    onNext: { action: "onNext executed!" },
  },
} as ComponentMeta<typeof PrevNextButtons>;

const Template: ComponentStory<typeof PrevNextButtons> = (args) => (
  <PrevNextButtons {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
