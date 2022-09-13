import styled from 'styled-components';
import { COLORS } from '../styles/Constants';
import CheckboxIcon from './CheckboxIcon';

export function Task() {

  return (
    <TaskContainer>
      <CheckboxIcon />
    </TaskContainer>
  );
};

export const TaskContainer = styled.div`
  background-color: ${COLORS.gray[500]};
  border: 1px solid ${COLORS.gray[400]};
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);

  height: 4.5rem;
`


