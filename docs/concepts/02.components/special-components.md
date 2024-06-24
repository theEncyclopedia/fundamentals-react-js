# Special Types of React Components

These special types of components and patterns help in creating more robust, reusable, and maintainable React applications.

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

A Higher-Order Component is a function that takes a component and returns a new component. HOCs are used for reusing component logic.

### Usage

- To share common functionality across multiple components.
- For concerns like authentication, data fetching, and UI permissions.

### Example

```jsx
import React from 'react';

const withLogging = (WrappedComponent) => {
    return class extends React.Component {
        componentDidMount() {
            console.log('Component mounted');
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};

const MyComponent = () => {
    return <div>My Component</div>;
};

export default withLogging(MyComponent);
```

## Render Props

A render prop is a function prop that a component uses to know what to render. Render props are useful for sharing code between React components using a prop whose value is a function.

### Usage

- To share state or functionality between components without using HOCs.
- To render dynamic content within a component.

### Example

```jsx
import React from 'react';

class DataProvider extends React.Component {
    state = { data: null };

    componentDidMount() {
        // Simulate fetching data
        this.setState({ data: 'Some fetched data' });
    }

    render() {
        return this.props.render(this.state.data);
    }
}

const App = () => {
    return (
        <DataProvider render={(data) => (
            <div>{data ? data : 'Loading...'}</div>
        )} />
    );
};

export default App;
```

## Context API

The Context API is a way to pass data through the component tree without having to pass props down manually at every level. Context provides a way to share values like themes or user settings between components without explicitly passing a prop through every level of the tree.

### Usage

- For global state management.
- To avoid props drilling in deeply nested components.

### Example

```jsx
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const ThemedComponent = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            Current theme: {theme}
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
        </div>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    );
};

export default App;
```
