import styled from 'styled-components';

import type { ReactNode } from 'react';

import ErrorBoundary from './ErrorBoundary';

interface CardProps {
  children?: ReactNode;
}

const StyledCard = styled.div`
  display: inline-block;
  padding: 10px;
  margin: 10px;
  border: 5px dashed blue;
`;

export default function Card({ children }: CardProps) {
  return (
    <ErrorBoundary>
      <StyledCard>
        <button>Hello World</button>
        {children}
      </StyledCard>
    </ErrorBoundary>
  );
}
