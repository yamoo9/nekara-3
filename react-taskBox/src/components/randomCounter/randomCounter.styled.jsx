import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% { opacity: 0; }
  25% { opacity: 0.7; }
  50% { opacity: 0.3; }
  75% { opacity: 0.5; }
  100% { opacity: 1; }
`;

export const Container = styled.output`
  font-size: 50vh;
  font-weight: 100;
  letter-spacing: -0.02em;
  color: var(--color-primary-600);
  animation: ${blink} 0.2s ease infinite alternate;

  &.completed {
    animation-name: none;
  }
`;
