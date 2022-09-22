import styled from 'styled-components';
import { COLORS, FONT_SIZE, WEIGHTS } from '../styles/Constants';
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

interface TaskState {
  id: string;
  createdAt: Date;
  taskContent: string;
  completedAt?: Date;
}

export function InputNewTask() {
  const [inputValue, setInputValue] = useState('');
  const [tasksList, setTasksList] = useState<TaskState[]>([]);

  function handleCreateNewTask() {
    const id = uuidv4();

    const newTask: TaskState = {
      id,
      createdAt: new Date(),
      taskContent: inputValue,
    };

    setTasksList(prevState => [...prevState, newTask]);

    setInputValue('');
  }

  console.log(tasksList);


  return (
    <InputNewTaskContainer>
      <InputTask
        placeholder='Adicione uma nova tarefa'
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      />
      <CreateTaskButton onClick={handleCreateNewTask}>
        Criar
        <PlusCircle size={18} weight="bold" />
      </CreateTaskButton>
    </InputNewTaskContainer>
  );
};

export const InputNewTaskContainer = styled.div`
  margin-top: -1.625rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
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

export const CreateTaskButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: ${FONT_SIZE.md};
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.gray[100]};

  height: 3.375rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${COLORS.produto.blueDark};
  border: none;

  cursor: pointer;

    &:hover {
      background-color: ${COLORS.produto.blue};
    }

    &:active{
      box-shadow: 0 0 0.5em 0.05em ${COLORS.produto.blue};
    }
`