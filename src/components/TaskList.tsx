import styled from "styled-components";
import { COLORS, FONT_SIZE, WEIGHTS } from "../styles/Constants"

export function TaskList() {
  return (
    <TaskListWrapper>
      <TaskListHeader>
        <p>Tarefas Criadas <Counter>0</Counter></p>
        <p>Concluídas <Counter>0</Counter></p>
      </TaskListHeader>
    </TaskListWrapper>
  );
};


export const TaskListWrapper = styled.section`
  width: 46.125rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const TaskListHeader = styled.div`
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