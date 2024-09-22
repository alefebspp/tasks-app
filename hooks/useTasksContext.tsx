import { useContext } from "react";

import TaskContext, { TaskContextProps } from "@/contexts/taskContext";

const useTaskContext = (): TaskContextProps => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTaskContext must be used within an TaskProvider");
  }

  return context;
};

export default useTaskContext;
