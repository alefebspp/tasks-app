"use client";
import { DialogClose } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Input from "./Input";
import Button from "./Button";

import styles from "@/styles/Modal.module.scss";
import buttonStyles from "@/styles/Button.module.scss";
import useTasks from "@/hooks/useTasks";

const formSchema = z.object({
  title: z.string().min(1),
});

type Props = {
  onSuccess: () => void;
};

export default function TaskForm({ onSuccess }: Props) {
  const { register, handleSubmit, reset } = useForm<z.infer<typeof formSchema>>(
    {
      resolver: zodResolver(formSchema),
    }
  );

  const { addTask, tasks } = useTasks();

  function onSubmit({ title }: z.infer<typeof formSchema>) {
    addTask({ id: `${title}-${tasks.length}`, name: title, done: false });
    reset();
    onSuccess();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <h3 className={styles.title}>Nova tarefa</h3>
      <Input
        register={register}
        label="Título"
        placeholder="Digite"
        name="title"
      />
      <div className={styles["buttons-container"]}>
        <Button type="submit" className={buttonStyles.primary}>
          Adicionar
        </Button>
        <DialogClose className={buttonStyles.button}>Cancelar</DialogClose>
      </div>
    </form>
  );
}
