import { Task } from "@/types";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export interface TaskContextProps {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  targetId: string | undefined;
  setTargetId: Dispatch<SetStateAction<string | undefined>>;
}

interface TaskProviderProps {
  children: ReactNode;
}

const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);

export const TaskContextProvider: FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [targetId, setTargetId] = useState<string>();

  useEffect(() => {
    const savedTasks = window.localStorage.getItem("tasks");

    if (savedTasks) {
      const parsedTasks: Task[] = JSON.parse(savedTasks);
      setTasks(parsedTasks);
    }
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        targetId,
        setTargetId,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
