import styled from "styled-components";
import { InputNewTask } from './InputNewTask'
import { TaskList } from './TaskList'

export function MainContent() {
  return (
    <MainContentWrapper>
      <InputNewTask />
      <TaskList />
    </MainContentWrapper>
  );
};

export const MainContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 76px; // 64px figma + 12px compensando margem negativa
`
