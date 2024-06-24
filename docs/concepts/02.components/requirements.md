# Requirements of creating React component

Writing React components involves understanding a few core concepts and following best practices to create reusable and maintainable components. Here are the key requirements and steps:

## 0. Component Naming Conventions

Use PascalCase for component names. Consistent naming conventions improve readability and follow React's standard practices.

```jsx
// Correct: PascalCase component name
const MyComponent = () => {
    return <div>Content</div>;
};

// Incorrect: camelCase component name
const myComponent = () => {
    return <div>Content</div>;
};
```

## 1. Pure functions

Functional components should be pure functions, meaning they do not modify the inputs and always return the same output for the same input. Pure functions are predictable, easier to test, and debug. They make the component's behavior consistent and reliable.

## 2. Props immutability

Props are read-only. Mutating props can lead to unpredictable behavior and bugs.

```jsx
const ExampleComponent = (props) => {
    // Correct way: use props as-is
    return <div>{props.text}</div>;
};
```

## 3. State Immutability

State should be treated as immutable. Use state setter functions to update state. Immutability ensures that changes are detected correctly and helps in optimizing performance with techniques like memoization.

```jsx
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};
```

## 4. Side Effects in useEffect

Use the useEffect hook to handle side effects like data fetching, subscriptions, or manually changing the DOM. Ensures that side effects are isolated from the main rendering logic, keeping the component clean and predictable.

```jsx
useEffect(() => {
    // Fetch data or perform side effects here
    return () => {
        // Cleanup if necessary
    };
}, []); // Empty array means this runs once on mount
```

## 5. Avoiding Side Effects in Render

Do not perform side effects directly in the rendering logic. Rendering should be a pure operation that returns the same output given the same input.

```jsx
// Incorrect: Performing side effect in render
const Component = () => {
    console.log('Side effect');
    return <div>Content</div>;
};

// Correct: Use useEffect for side effects
useEffect(() => {
    console.log('Side effect');
}, []);
```

## 6. Use of Keys in Lists

Assign unique keys to elements when rendering lists. Keys help React identify which items have changed, been added, or removed, optimizing rendering performance.

```jsx
const List = ({ items }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    );
};
```

## 7. Stateless Functional Components

Use functional components for stateless UI elements. Functional components are simpler and easier to understand. They also leverage hooks for state and side effects.

```jsx
const Display = ({ message }) => {
    return <p>{message}</p>;
};
```

## 8. Component Reusability

Design components to be reusable and composable. Promotes DRY (Don't Repeat Yourself) principles and makes your codebase more maintainable.

```jsx
const Button = ({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>;
};

const App = () => {
    return (
        <div>
            <Button onClick={() => alert('Clicked!')}>Click me</Button>
            <Button onClick={() => alert('Another click!')}>Another Button</Button>
        </div>
    );
};
```

## 9. Avoid Inline Functions in JSX

Avoid defining functions directly inside JSX attributes. Inline functions create a new function on every render, which can impact performance and cause unnecessary re-renders.

```jsx
// Incorrect: Inline function in JSX
<button onClick={() => console.log('Clicked')}>Click me</button>;

// Correct: Define function outside JSX
const handleClick = () => {
    console.log('Clicked');
};

<button onClick={handleClick}>Click me</button>;
```

## Example: Simple React Function Component

```jsx
import React, { useState, useEffect } from 'react';
import './MyComponent.css';

const MyComponent = ({ name }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Component mounted or updated: ${name}`);
    }, [name]);

    return (
        <div className="my-component">
            <h1>Hello, {name}!</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default MyComponent;
```
