import * as Dialog from "@radix-ui/react-dialog";
import { PropsWithChildren } from "react";

import styles from "@/styles/Modal.module.scss";

type Props = {} & PropsWithChildren;

export default function ModalContent({ children }: Props) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />
      <Dialog.Content className={styles.content}>{children}</Dialog.Content>
    </Dialog.Portal>
  );
}
