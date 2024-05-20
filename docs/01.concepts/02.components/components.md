# Components

As mentioned in the previous documentation, React offers a component-based development approach. This means developers can create highly customizable components, which are JavaScript functions or classes that return UI elements, thus modularizing the development process.

## Types of Components

When React was first released by Facebook in 2013, it revolutionized front-end development by introducing a component-based architecture. The primary goal was to simplify the development of complex user interfaces by breaking them down into smaller, reusable pieces. Initially, there were only class components, which were more aligned with the object-oriented programming paradigm many developers were familiar with.

### Class components

#### Features

1. **State and Lifecycle:** Class components were designed to manage their own internal state and lifecycle methods, such as componentDidMount, componentDidUpdate, and componentWillUnmount.
2. **Inheritance:** They extended from React.Component, making it possible to use methods like this.setState and this.forceUpdate.

#### Advantages

1. **Powerful:** They could handle complex logic, state, and lifecycle events.
2. **Familiarity:** For developers coming from object-oriented languages, the class-based syntax was more familiar.

#### Disadvantages

1. **Verbose:** The syntax for class components was often more verbose and could be harder to read and maintain.
2. **Boilerplate Code:** There was a significant amount of boilerplate code required, such as binding methods in the constructor.

#### Example code

```jsx
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1
    }));
  }

  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}

export default Timer;

```

#### Life cycle methods

- `componentDidMount():` Called after the component is rendered for the first time.
- `componentDidUpdate(prevProps, prevState)`: Called after the component updates.
- `componentWillUnmount():` Called just before the component is removed from the DOM.

#### Error boundary

### Functional components

Functional components were introduced as a simpler alternative to class components. They were stateless and lacked lifecycle methods, making them easier to write and understand.

#### Features

1. **Simplicity:** They were plain JavaScript functions that accepted props and returned JSX.
2. **Stateless:** Initially, they were used only for presentational purposes without state or lifecycle management.

#### Advantages

1. **Concise:** The syntax was more concise and readable.
2. **Performance:** Functional components were more performant due to their stateless nature.

#### Disadvantages

1. **Limited Functionality:** They couldn't manage state or lifecycle methods, limiting their use cases to simple presentational components.

#### Example code

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
```

## The Introduction of Hooks (React 16.8)

In 2019, React introduced Hooks, a groundbreaking feature that bridged the gap between functional and class components. Hooks allowed functional components to use state and other React features previously exclusive to class components.

### Features

1. `useState:` Manage state in functional components.
2. `useEffect:` Handle side effects and lifecycle events.
3. Custom Hooks: Create reusable logic that can be shared across components.

### Advantages

1. **Unified Approach:** Developers could now choose functional components for almost all use cases, simplifying the mental model.
2. **Code Reusability:** Custom Hooks allowed for more modular and reusable code.
3. **Reduced Boilerplate:** Hooks reduced the amount of boilerplate code needed in components

## Transition and Current Trends

With the introduction of Hooks, the React community started favoring functional components over class components for new development. The simplicity and power of Hooks led to a gradual shift in best practices:

1. **Modern Codebases:** Newer React projects predominantly use functional components with Hooks.
2. **Legacy Code:** Many existing projects still use class components, requiring developers to understand both paradigms

The evolution from class components to functional components with Hooks represents React's commitment to simplifying development while retaining powerful features. Understanding this history helps developers appreciate the design choices and adapt to modern best practices in React development.

In summary, while functional components are now preferred due to their simplicity and the power of Hooks, class components are still important for understanding older codebases and certain complex use cases.
