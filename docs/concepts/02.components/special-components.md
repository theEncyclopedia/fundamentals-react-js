# Special Types of React Components

## Error Boundary

An Error Boundary is a React component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of the component tree that crashed.

### Usage

- Error boundaries are useful for catching errors in a part of your application and preventing the entire app from crashing.
- They help in providing a better user experience by displaying a fallback UI and allowing the rest of the application to continue working.

### How to create an Error Boundary

Error boundaries can only be class components. Functional components cannot be error boundaries.

```jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Error caught by Error Boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;
```

### Usage in app

Wrap any component that you want to monitor for errors with the ErrorBoundary component.

```jsx
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import MyComponent from './MyComponent';

const App = () => {
    return (
        <ErrorBoundary>
            <MyComponent />
        </ErrorBoundary>
    );
};

export default App;
```

## Higher-Order Components (HOC)

## Render Props

## Context API
