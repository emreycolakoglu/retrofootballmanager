import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NewsScroller } from "./news-scroller";

export default {
  component: NewsScroller,
  title: "Modal",
} as ComponentMeta<typeof NewsScroller>;

const Template: ComponentStory<typeof NewsScroller> = (args) => (
  <NewsScroller {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  news: [
    {
      label: "TEST",
    },
  ],
};
