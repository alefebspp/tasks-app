"use client";
import { DialogClose } from "@radix-ui/react-dialog";

import Button from "./Button";

import styles from "@/styles/Modal.module.scss";
import buttonStyles from "@/styles/Button.module.scss";

type Props = {
  handleDeleteTask: () => void;
};

export default function DeleteTaskAlert({ handleDeleteTask }: Props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Deletar tarefa</h3>

      <p className={styles.description}>
        Tem certeza que você deseja deletar essa tarefa?
      </p>

      <div className={styles["buttons-container"]}>
        <Button
          onClick={handleDeleteTask}
          type="button"
          className={buttonStyles.destructive}
        >
          Deletar
        </Button>
        <DialogClose className={buttonStyles.button}>Cancelar</DialogClose>
      </div>
    </div>
  );
}
