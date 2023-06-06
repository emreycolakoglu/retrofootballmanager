import * as Dialog from "@radix-ui/react-dialog";
import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./modal.module.scss";

export function Modal(props: ModalProps) {
  const {
    contentNode,
    triggerNode,
    closeNode,
    rootProps,
    contentProps,
    overlayProps,
    contentClassName,
    overlayClassName,
    closeProps,
  } = props;

  const Content = ({ children }: { children?: ReactNode }) => (
    <Dialog.Portal>
      <Dialog.Overlay
        {...overlayProps}
        className={classNames(styles["dialogOverlay"], overlayClassName)}
      />
      <Dialog.Content
        {...contentProps}
        className={classNames(
          styles["dialogContentContainer"],
          contentClassName
        )}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );

  return (
    <Dialog.Root {...rootProps}>
      <Dialog.Trigger asChild>{triggerNode}</Dialog.Trigger>
      <Content>
        <Dialog.Close {...closeProps} asChild>
          {closeNode}
        </Dialog.Close>
        {contentNode}
      </Content>
    </Dialog.Root>
  );
}

export interface ModalProps {
  triggerNode?: ReactNode;
  contentNode?: ReactNode;
  closeNode?: ReactNode;
  rootProps?: Dialog.DialogProps;
  contentProps?: Dialog.DialogContentProps;
  overlayProps?: Dialog.DialogOverlayProps;
  closeProps?: Dialog.DialogCloseProps;
  contentClassName?: string;
  overlayClassName?: string;
}

export default Modal;
