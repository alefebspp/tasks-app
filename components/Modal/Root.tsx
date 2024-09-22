import * as Dialog from "@radix-ui/react-dialog";
import { PropsWithChildren } from "react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
} & PropsWithChildren;

export default function ModalRoot({ open, setOpen, children }: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {children}
    </Dialog.Root>
  );
}
