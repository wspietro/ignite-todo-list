import styled from 'styled-components';
import { COLORS, FONT_SIZE, WEIGHTS } from '../styles/Constants';
import CheckboxIcon from './CheckboxIcon';
import { Trash } from 'phosphor-react';
import { TaskState } from "../contexts/TasksContext";


export function Task({ taskContent }: TaskState) {

  return (
    <TaskContainer>
      <CheckboxIcon />
      <TaskDedscription>{taskContent}</TaskDedscription>
      <Button>
        <Trash size={24} weight="light" />
      </Button>
    </TaskContainer>
  );
};

export const TaskContainer = styled.div`
  background-color: ${COLORS.gray[500]};
  border: 1px solid ${COLORS.gray[400]};
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);

  height: 4.5rem;

  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  padding: 1rem;

`

export const TaskDedscription = styled.p`
  font-size: ${FONT_SIZE.md};
  font-weight: ${WEIGHTS.normal};
  line-height: 1.4;
  color: ${COLORS.gray[100]};

  flex: 1;
`

export const Button = styled.button`
  line-height: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  padding: 0.3125rem;
  margin-top: -0.3125rem;
  border-radius: 8px;
  color: ${COLORS.gray[300]};

    :hover {
      color: ${COLORS.danger};
      background-color: ${COLORS.gray[400]};
    }
`

