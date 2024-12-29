# Error boundary

An **ErrorBoundary** is a React component that serves as a catch-all mechanism for JavaScript errors in its child component tree, preventing them from crashing the entire app. Instead, it renders a fallback UI and optionally provides a way to recover from the error.

## Key Points

**1. Error Handling:**

- Catches errors during rendering, lifecycle methods, and constructors of child components.
- Does not catch errors in:
  - Event handlers.
  - Asynchronous code (e.g., setTimeout or fetch).
  - Server-side rendering.
  - Errors thrown in the ErrorBoundary itself.

**2. Implementation:** A class component must implement the componentDidCatch lifecycle method or getDerivedStateFromError static method to qualify as an ErrorBoundary.

### Example

```jsx
import type { ReactNode, ErrorInfo } from 'react';

type ErrorBoundaryProps = {
  fallback: ReactNode; // What to render when an error occurs
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Error caught:", error, errorInfo);
    }

    render () {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}
```

### Usage

Wrap any component tree with `ErrorBoundary` to handle potential errors:

```jsx
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <MyComponent />
    </ErrorBoundary>
  );
};

export default App;
```

## Recommendation

1. Use **Error Boundaries** for **recoverable error** or to gracefully display fallback UIs for parts of your app(e.g, widgets, section)
2. Combine with **Logging tools** to capture error details for debugging.
3. For critical app-wide errors, you may wrap your entire app wit a global `ErrorBoundary`.

## Functional component version

React doesn't natively provide hooks for `ErrorBoundary`, but you can use a combination of state and custom error handling logic to achieve similar functionality. Below is an example using a `useErrorBoundary` hook:

```jsx
import React, { useState, ReactNode, ReactElement } from "react";

type ErrorBoundaryProps = {
  fallback: ReactNode; // The UI to render on error
  children: ReactNode; // The child components
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ fallback, children }) => {
  const [error, setError] = useState<Error | null>(null);

  if (error) {
    return <>{fallback}</>; // Render fallback UI when error occurs
  }

  return (
    <ErrorBoundaryHandler onError={setError}>
      {children}
    </ErrorBoundaryHandler>
  );
};

type ErrorBoundaryHandlerProps = {
  onError: (error: Error) => void;
  children: ReactNode;
};

const ErrorBoundaryHandler: React.FC<ErrorBoundaryHandlerProps> = ({ onError, children }) => {
  try {
    return <>{children}</>;
  } catch (error) {
    onError(error as Error); // Pass the error to ErrorBoundary's state
    return null; // Render nothing until fallback is triggered
  }
};

export default ErrorBoundary;
```

## Reference

- Documentation: <https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary>
