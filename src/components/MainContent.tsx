import styled from "styled-components";
import { TasksContextProvider } from "../contexts/TasksContext";
import { COLORS } from "../styles/Constants";
import { InputNewTask } from './InputNewTask'
import { TaskDashboard } from './TaskDashboard'

export function MainContent() {
  return (
    <MainContentWrapper>
      <TasksContextProvider>
        <InputNewTask />
        <TaskDashboard />
      </TasksContextProvider>
    </MainContentWrapper>
  );
};

export const MainContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 6.25rem; // 64px figma + 26px compensando margem negativa

  height: 100%;

  background-color: ${COLORS.gray[600]};
`
