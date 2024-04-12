# React Context

React Context allows parent components to provide information to any component within their subtree, bypassing explicit prop drilling. This feature is particularly useful for data shared across many components at various nesting levels.

## Benefit of Context

- **Simplifies Prop Management**: Context streamlines data sharing across components, especially useful when the same data is required by multiple components or when data needs to be passed deeply.
- **Reduces Prop Drilling**: Avoids the complexity of passing props through several layers, mitigating issues associated with "prop drilling".

## Implementing context

Passing props is a great way to explicitly pipe data through your UI tree to the components that use it.

But passing props can become verbose and inconvenient when you need to pass some prop deeply through the tree, or if many components need the same prop. The nearest common ancestor could be far removed from the components that need data, and lifting state up that high can lead to a situation called “prop drilling”.

## How to use context

Here's a brief overview of how React Context works:

1.Create a Context: You first create a new context using React.createContext(). This returns a context object with two components: Provider and Consumer.

```javascript
// ThemeContext.js
import React from "react";

const ThemeContext = React.createContext("light"); // Default value is 'light'
export default ThemeContext;
```

2.Provider Component: This component is used to wrap a part of your application where you want the context to be accessible. You can pass the data you want to share (known as "context value") to the Provider as a prop.

```javascript
// ThemeContext.js
import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("light"); // State to hold the current theme

  return (
    <ThemeContext.Provider value={theme}>
      {/* Providing the theme context */}
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

3.Consumer Component: This component is used in any descendant of the Provider component when you want to access the context value. React also offers a useContext hook for function components to consume context values more easily.

```javascript
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Toolbar() {
  const theme = useContext(ThemeContext); // Accessing the context value

  return (
    <div
      style={{
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#333" : "#eee",
      }}>
      <h1>Welcome to the {theme} theme!</h1>
    </div>
  );
}
```

4.Updating Context Values: Context values can be updated using state or props in the component that renders the Provider. All consumers that are descendants of the Provider will re-render when the context value changes.

## Children characteristic

When multiple child components within the same context are using a context value, and one of them updates the state, the behavior regarding re-rendering depends on how the context is being used and the nature of the update.

1. **Rerendering on State Update:** When the value of a context changes (i.e., the value passed to the Provider's value prop changes), all components that are consuming this context will re-render. This is because the context value is a dependency for these components, and a change in the dependency triggers a re-render.

2. **Efficiency Considerations**: This behavior is efficient for scenarios where multiple components need to stay synchronized with the same data. However, it can lead to performance issues if the context is large and changes frequently, as it might cause unnecessary re-renders of many components.

### Recap

- First, create a new context with `createContext()` api. This is typically done outside of your component so that it can be imported and used in any component that needs it.
- Wrap the component that must use context with a `Context.Provider`
- Set a current value of the context in `Context.Provider`'s value prop that will be passed down to the consuming components.
- Use `useContext(Context)` or `Context.Consumer`(For class components) to access the context value
- Context consumer will access the value form closest `Context` above with `useContext(Context)`. If there is no Provider for this context, the default value passed to createContext() is used.

It's important to note that while Context is a powerful tool, it should be used sparingly as it can make component reusability more difficult and can lead to over-rendering issues if not managed properly. For many applications, state management libraries like Redux or MobX might be a more appropriate choice for managing global state.
