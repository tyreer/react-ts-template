import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import type { ErrorInfo, ReactNode } from 'react';

interface ErrorFallbackProps {
  error: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong</p>
      <pre>{error.message}</pre>
    </div>
  );
}

export default function ErrorBoundary({
  children,
  fallback,
  onError,
}: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary
      FallbackComponent={fallback ? () => <>{fallback}</> : ErrorFallback}
      onError={onError}
    >
      {children}
    </ReactErrorBoundary>
  );
}
