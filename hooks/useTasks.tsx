"use client";
import { Task } from "@/types";
import { useEffect } from "react";
import useTaskContext from "./useTasksContext";

export default function useTasks() {
  const { tasks, setTasks } = useTaskContext();

  function addTask(task: Task) {
    setTasks((prev) => {
      const newTasks = [...prev, task];
      saveTasks(newTasks);
      return newTasks;
    });
  }

  function removeTask(taskId: string) {
    setTasks((prev) => {
      const newTasks = prev.filter(({ id }) => id !== taskId);
      saveTasks(newTasks);
      return newTasks;
    });
  }

  function handleTask({ taskId, done }: { taskId: string; done: boolean }) {
    const targetTask = tasks.find(({ id }) => id === taskId);

    if (targetTask) {
      const filteredTasks = tasks.filter(({ id }) => id !== taskId);
      const newTasks = [...filteredTasks, { ...targetTask, done: !done }];
      saveTasks(newTasks);
      setTasks(newTasks);
    }
  }

  function saveTasks(tasks: Task[]) {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  useEffect(() => {
    const savedTasks = window.localStorage.getItem("tasks");

    if (savedTasks) {
      const parsedTasks: Task[] = JSON.parse(savedTasks);
      setTasks(parsedTasks);
    }
  }, []);

  return {
    tasks,
    addTask,
    removeTask,
    handleTask,
  };
}
