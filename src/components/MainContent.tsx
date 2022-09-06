import styled from "styled-components";
import { COLORS } from "../styles/Constants";
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

  gap: 100px; // 64px figma + 26px compensando margem negativa

  height: 100%;

  background-color: ${COLORS.gray[600]};
`
