# React Context

Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props. This is particularly useful when you have data that needs to be accessible by many components at different nesting levels.

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

It's important to note that while Context is a powerful tool, it should be used sparingly as it can make component reusability more difficult and can lead to over-rendering issues if not managed properly. For many applications, state management libraries like Redux or MobX might be a more appropriate choice for managing global state.

You can provide the initial state directly in createContext, but it should be done with an understanding of how it affects your component's behavior. When you provide an initial state, any component using this context outside of a TodoProvider will receive this initial state instead of undefined.

This might seem like a good idea, as it can prevent the need for null checks, but it can potentially lead to bugs that are hard to detect. A component might incorrectly assume it's within a properly configured provider and try to operate on this initial state, leading to unexpected behavior.

## Advanced example

Creating an advanced example using React Context involves more complex scenarios, such as dynamically updating context values based on user input, and integrating context with other React features like reducers or side effects.

### Todo app in (example-app)

- TodoContext: This is the context we created. It holds the state of our to-do list and a dispatch method to update the state.
- TodoProvider Component: This component uses useReducer to manage the state of our to-dos and provides the state and dispatch method to its children.
- App Component: It wraps the TodoList component with TodoProvider.
- TodoList Component: It consumes the TodoContext and displays a list of to-dos. It allows adding new to-dos.
- TodoItem Component: It also consumes the TodoContext and allows each to-do item to be removed.

## Related Topcs

- 03.Hooks/ContextHooks.md
- 04.Api/CreateContext
