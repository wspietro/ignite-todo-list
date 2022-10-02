import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid";

export interface TaskState {
  id: string;
  createdAt: Date;
  taskContent: string;
  isCompleted: boolean;
}

interface TasksContextType {
  createNewTask: (inputValue: string) => void;
  tasksList: TaskState[];
  changeCompletedValue: (isChecked: boolean, taskId: string) => void;
  deleteTask: (taskId: string) => void;
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
      isCompleted: false,
    };

    setTasksList(prevState => [...prevState, newTask]);
  };

  function changeCompletedValue(isChecked: boolean, taskId: string) {
    setTasksList(prevState =>
      prevState.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            isCompleted: isChecked
          }
        } else {
          return task;
        }
      }),
    )
  }

  function deleteTask(taskId: string) {
    setTasksList(prevState => prevState.filter(task => task.id !== taskId))
  }

  return (
    <TasksContext.Provider
      value={{
        createNewTask,
        tasksList,
        changeCompletedValue,
        deleteTask
      }}
    >
      <>
        {children}
      </>
    </TasksContext.Provider>
  )
}