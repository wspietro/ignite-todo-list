import styled from 'styled-components';
import { COLORS, FONT_SIZE, WEIGHTS } from '../styles/Constants';

export function InputNewTask() {
  return (
    <InputNewTaskContainer>
      <InputTask placeholder='Adicione uma nova tarefa' />
    </InputNewTaskContainer>
  );
};

export const InputNewTaskContainer = styled.div`
  margin-top: -26px;
`

export const InputTask = styled.input`
  width: 39.875rem;
  padding: 1rem;

  background-color: ${COLORS.gray[500]};
  border: 1px solid ${COLORS.gray[700]};
  border-radius: 8px;

  font-size: ${FONT_SIZE.lg};
  font-weight: ${WEIGHTS.normal};
  color: ${COLORS.gray[100]};

    &:focus {
      outline: none;
      border: 1px solid ${COLORS.produto.purpleDark};
    }

    &::placeholder {
      font-weight: ${WEIGHTS.normal};
      font-size: ${FONT_SIZE.lg};
      color: ${COLORS.gray[300]};
    }
`