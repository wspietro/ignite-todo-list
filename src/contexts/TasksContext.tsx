import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid";

interface TaskState {
  id: string;
  createdAt: Date;
  taskContent: string;
  completedAt?: Date;
}

interface TasksContextType {
  createNewTask: (inputValue: string) => void;
}

interface CyclesContextProviderProps {
  children: React.ReactNode;
}

export const TasksContext = createContext({} as TasksContextType)


export function TasksContextProvider({ children }: CyclesContextProviderProps) {
  const [tasksList, setTasksList] = useState<TaskState[]>([]);

  function createNewTask(inputValue: string) {
    const id = uuidv4();
    const taskContent = inputValue

    const newTask: TaskState = {
      id,
      createdAt: new Date(),
      taskContent,
    };

    setTasksList(prevState => [...prevState, newTask]);
  }

  return (
    <TasksContext.Provider
      value={{
        createNewTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}