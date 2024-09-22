"use client";
import styles from "@/styles/Task.module.scss";
import TrashIcon from "./TrashIcon";

type Props = {
  onDeleteChange: () => void;
  name: string;
  done: boolean;
  handleTask: () => void;
};

export default function Task({
  onDeleteChange,
  handleTask,
  name,
  done,
}: Props) {
  return (
    <li className={styles.container}>
      <input onChange={handleTask} checked={done} type="checkbox" />
      <span
        className={`${styles.text} ${
          done ? styles["completed-task-text"] : ""
        }`}
      >
        {name}
      </span>
      <button onClick={onDeleteChange} className={styles.button}>
        <TrashIcon className={styles.icon} />
      </button>
    </li>
  );
}
