import styled from 'styled-components';

import type { ReactNode } from 'react';

import ErrorBoundary from './ErrorBoundary';

interface CardProps {
  children: ReactNode;
}

const StyledCard = styled.div`
  border: 5px dashed blue;
`;

export default function Card({ children }: CardProps) {
  return (
    <ErrorBoundary>
      <StyledCard>{children}</StyledCard>
    </ErrorBoundary>
  );
}
