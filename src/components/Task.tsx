import styled from 'styled-components';
import { COLORS, FONT_SIZE, WEIGHTS } from '../styles/Constants';
import CheckboxIcon from './CheckboxIcon';
import { Trash } from 'phosphor-react';
import { TasksContext, TaskState } from "../contexts/TasksContext";
import { useContext } from 'react';


export function Task({ taskContent, id, isCompleted }: TaskState) {
  const { changeCompletedValue } = useContext(TasksContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const taskId = id;

    changeCompletedValue(isChecked, taskId)
  }



  return (
    <TaskContainer isCompleted={isCompleted}>
      <CheckboxIcon handleCheckboxChange={handleChange} />
      <TaskDedscription isCompleted={isCompleted} >{taskContent}</TaskDedscription>
      <Button>
        <Trash size={24} weight="light" />
      </Button>
    </TaskContainer>
  );
};

interface CheckBoxStatusProps {
  isCompleted: boolean;
}


export const TaskContainer = styled.div<CheckBoxStatusProps>`
  background-color: ${props => props.isCompleted ? COLORS.gray[500] : COLORS.gray[400]} ;
  border: 1px solid ${COLORS.gray[400]};
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);

  height: 4.5rem;

  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  padding: 1rem;

`

export const TaskDedscription = styled.p<CheckBoxStatusProps>`
  font-size: ${FONT_SIZE.md};
  font-weight: ${WEIGHTS.normal};
  line-height: 1.4;
  color: ${props => props.isCompleted ? COLORS.gray[300] : COLORS.gray[100]};
  text-decoration: ${props => props.isCompleted ? 'line-through' : "none"};

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

