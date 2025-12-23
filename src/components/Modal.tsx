import React, {
  type PropsWithChildren,
  useRef,
  useImperativeHandle,
} from "react";
import { createPortal } from "react-dom";
import type { ModalProps } from "../utils/type-utils";
import Button from "./Button.tsx";

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  children,
  ref,
  buttonCaption,
}) => {
  const dialog = useRef<HTMLDialogElement>(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        open: () => {
          dialog.current?.showModal();
        },
      };
    },
    []
  );

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
