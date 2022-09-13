import styled from "styled-components";
import { COLORS, FONT_SIZE, WEIGHTS } from "../styles/Constants"

import clipboard from "../assets/clipboard.svg"

export function EmptyTasksMessage() {
  return (
    <EmptyMessageWrapper>
      <img src={clipboard} />
      <Description>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </Description>
    </EmptyMessageWrapper>
  );
};

export const EmptyMessageWrapper = styled.div`
  border-top: 1px solid ${COLORS.gray[400]};

  height: 244px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Description = styled.div`

  p {
    font-weight: ${WEIGHTS.bold};
    font-size: ${FONT_SIZE.lg};
    color: ${COLORS.gray[300]};
    line-height: 1.4;

    :last-child {
      font-weight: ${WEIGHTS.normal};
    }
  }
`
