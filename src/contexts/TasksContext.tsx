import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid";

export interface TaskState {
  id: string;
  createdAt: Date;
  taskContent: string;
  isCompleted: Boolean;
}

interface TasksContextType {
  createNewTask: (inputValue: string) => void;
  tasksList: TaskState[];
}

interface CyclesContextProviderProps {
  children: React.ReactNode;
}

export const TasksContext = createContext({} as TasksContextType)


export function TasksContextProvider({ children }: CyclesContextProviderProps) {
  const [tasksList, setTasksList] = useState<TaskState[]>([]);
  console.log(tasksList);


  function createNewTask(inputValue: string) {
    const id = uuidv4();
    const taskContent = inputValue

    const newTask: TaskState = {
      id,
      createdAt: new Date(),
      taskContent,
      isCompleted: false,
    };

    setTasksList(prevState => [...prevState, newTask]);
  }

  return (
    <TasksContext.Provider
      value={{
        createNewTask,
        tasksList
      }}
    >
      <>
        {children}
      </>
    </TasksContext.Provider>
  )
}