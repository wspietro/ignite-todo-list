import styled from "styled-components";
import { COLORS } from '../styles/Constants';

import logo from '../assets/todo-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logomarca todo-list" />
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 12.5rem;

  background-color: ${COLORS.gray[700]};
`