import * as Dialog from "@radix-ui/react-dialog";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export default function ModalTrigger({ children }: Props) {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>;
}
