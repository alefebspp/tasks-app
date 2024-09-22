"use client";
import { useState } from "react";

import Task from "./Task";
import Button from "./Button";
import Modal from "./Modal";
import TaskForm from "./TaskForm";
import DeleteTaskAlert from "./DeleteTaskAlert";

import useTasks from "@/hooks/useTasks";
import useTaskContext from "@/hooks/useTasksContext";

import styles from "@/styles/TasksList.module.scss";
import buttonStyles from "@/styles/Button.module.scss";

export default function TaskList() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const { setTargetId, targetId } = useTaskContext();
  const { tasks, removeTask, handleTask } = useTasks();

  const completedTasks = tasks.filter(({ done }) => done);
  const pendingTasks = tasks.filter(({ done }) => !done);

  function onDeleteChange(id: string) {
    setAlertIsOpen(true);
    setTargetId(id);
  }

  function handleDeleteTask() {
    if (targetId) {
      removeTask(targetId);
      setAlertIsOpen(false);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Suas tarefas de hoje</h2>

        {pendingTasks.length > 0 ? (
          <ul className={styles["task-container"]}>
            {pendingTasks.map(({ id, name, done }) => (
              <Task
                key={id}
                name={name}
                done={done}
                onDeleteChange={() => onDeleteChange(id)}
                handleTask={() => handleTask({ taskId: id, done })}
              />
            ))}
          </ul>
        ) : (
          <div className={styles["empty-container"]}>Nenhuma task a fazer.</div>
        )}

        <h2 className={styles.title}>Tarefas finalizadas</h2>

        {completedTasks.length > 0 ? (
          <ul className={styles["task-container"]}>
            {completedTasks.map(({ id, name, done }) => (
              <Task
                key={id}
                name={name}
                done={done}
                onDeleteChange={() => onDeleteChange(id)}
                handleTask={() => handleTask({ taskId: id, done })}
              />
            ))}
          </ul>
        ) : (
          <div className={styles["empty-container"]}>
            Nenhuma task a finalizada.
          </div>
        )}
      </div>
      <Modal.Root open={alertIsOpen} setOpen={setAlertIsOpen}>
        <Modal.Content>
          <DeleteTaskAlert handleDeleteTask={handleDeleteTask} />
        </Modal.Content>
      </Modal.Root>
      <Modal.Root open={modalIsOpen} setOpen={setModalIsOpen}>
        <Modal.Trigger>
          <Button className={buttonStyles.primary}>
            Adicionar nova tarefa
          </Button>
        </Modal.Trigger>
        <Modal.Content>
          <TaskForm onSuccess={() => setModalIsOpen(false)} />
        </Modal.Content>
      </Modal.Root>
    </div>
  );
}
