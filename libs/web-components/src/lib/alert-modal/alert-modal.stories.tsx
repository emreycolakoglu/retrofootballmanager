/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AlertModal } from "./alert-modal";
import { Modal } from "../modal/modal";

export default {
  component: AlertModal,
  title: "Error Modal",
} as ComponentMeta<typeof AlertModal>;

const Template: ComponentStory<typeof AlertModal> = (args) => {
  const { ...rest } = args;
  return (
    <Modal
      triggerNode={<button>trigger</button>}
      contentNode={<AlertModal {...rest} />}
    ></Modal>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  title: "Error Title",
  titleAlign: "left",
  message: "Lorem ipsum dolor sit amet. Dan dun whats up",
  onOkay: () => {},
  onCancel: () => {},
};
