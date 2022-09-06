import styled from 'styled-components';

interface SpacerProps {
  axis?: 'horizontal' | 'vertical';
  size: number;
}

function getHeight({ axis, size }: SpacerProps) {
  return axis === 'horizontal' ? 1 : size;
}
function getWidth({ axis, size }: SpacerProps) {
  return axis === 'vertical' ? 1 : size;
}

export const Spacer = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

// https://www.joshwcomeau.com/react/modern-spacer-gif/