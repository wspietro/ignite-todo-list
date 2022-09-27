import { useContext } from "react";
import styled from "styled-components";
import { TasksContext } from "../contexts/TasksContext";
import { COLORS, FONT_SIZE, WEIGHTS } from "../styles/Constants"
import { EmptyTasksMessage } from "./EmptyTasksMessage"
import { Task } from "./Task"

export function TaskDashboard() {
  const { tasksList } = useContext(TasksContext);

  return (
    <TaskDashboardWrapper>
      <TaskDashboardHeader>
        <p>Tarefas Criadas <Counter>0</Counter></p>
        <p>Concluídas <Counter>0</Counter></p>
      </TaskDashboardHeader>
      {tasksList.length === 0 ? <EmptyTasksMessage /> :
        <TaskListWrapper>
          {tasksList.map(task => (
            <Task
              key={task.id}
              id={task.id}
              createdAt={task.createdAt}
              taskContent={task.taskContent}
              completedAt={task.completedAt}
            />
          ))}
        </TaskListWrapper>
      }
    </TaskDashboardWrapper>
  );
};


export const TaskDashboardWrapper = styled.section`
  width: 46.125rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const TaskDashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;

    p {
      font-weight: ${WEIGHTS.bold};
      font-size: ${FONT_SIZE.md};
      color: ${COLORS.produto.blue};
      line-height: 1.0625rem;

        :last-child {
          color: ${COLORS.produto.purple};
        }
    }
`

export const Counter = styled.span`
  color: ${COLORS.gray[200]};
  font-size: ${FONT_SIZE.sm};
  line-height: 0.9375rem;

  background-color: ${COLORS.gray[400]};
  padding: 2px 8px;
  border-radius: 999px;

  margin-left: 0.5rem;
`

// TODO: Usar ul e Li?
export const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
` 