# React Context

Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props. This is particularly useful when you have data that needs to be accessible by many components at different nesting levels.

## Why use context?

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

### Recap

- First, create a new context with `createContext()` api. This is typically done outside of your component so that it can be imported and used in any component that needs it.
- Wrap the component that must use context with a `Context.Provider`
- Set a current value of the context in `Context.Provider`'s value prop that will be passed down to the consuming components.
- Use `useContext(Context)` or `Context.Consumer`(For class components) to access the context value
- Context consumer will access the value form closest `Context` above with `useContext(Context)`. If there is no Provider for this context, the default value passed to createContext() is used.

It's important to note that while Context is a powerful tool, it should be used sparingly as it can make component reusability more difficult and can lead to over-rendering issues if not managed properly. For many applications, state management libraries like Redux or MobX might be a more appropriate choice for managing global state.

## Intializing context in detail

You can provide the initial state directly in createContext, but it should be done with an understanding of how it affects your component's behavior. When you provide an initial state, any component using this context outside of a TodoProvider will receive this initial state instead of undefined.

```typescript
const TodoContext = createContext<TodoContextType | undefined>(undefined);
```

This might seem like a good idea, as it can prevent the need for null checks, but it can potentially lead to bugs that are hard to detect. A component might incorrectly assume it's within a properly configured provider and try to operate on this initial state, leading to unexpected behavior.

Using `undefined` as the default value and then checking for `undefined` in the consuming components (as done previously) makes it clear when the context is used incorrectly. It forces developers to handle the error case where the context is used outside of its intended scope, leading to more robust and maintainable code.

## Example

Creating an advanced example using React Context involves more complex scenarios, such as dynamically updating context values based on user input, and integrating context with other React features like reducers or side effects.

### Todo app in (example-app)

- TodoContext: This is the context we created. It holds the state of our to-do list and a dispatch method to update the state.
- TodoProvider Component: This component uses useReducer to manage the state of our to-dos and provides the state and dispatch method to its children.
- App Component: It wraps the TodoList component with TodoProvider.
- TodoList Component: It consumes the TodoContext and displays a list of to-dos. It allows adding new to-dos.
- TodoItem Component: It also consumes the TodoContext and allows each to-do item to be removed.s

#### Dispatch

In the context of programming, "dispatch" carries a similar connotation but is applied to data, events, or actions within a program. It refers to the process of sending out instructions or actions to be executed. The meaning can vary slightly depending on the specific context within programming:

1. Event Dispatching: In event-driven programming, dispatching often refers to the process of sending out or handling events. When an event occurs (like a user clicking a button), an event dispatcher sends this event to the appropriate handler function or method that has been set up to respond to it.

2. Function or Method Dispatch: In object-oriented programming, method dispatch refers to the process of selecting which method to invoke in response to a method call, especially in a context where the exact type of object may not be known until runtime (dynamic dispatch). This is a key concept in polymorphism.

3. State Management (e.g., Redux or useReducer in React): In the context of state management libraries or hooks like Redux or React's useReducer, "dispatch" is used to send actions to a store or reducer. These actions are objects that describe what needs to happen to the application's state. The reducer then handles the action and returns a new state based on the action's type and payload. Here, dispatching an action is akin to sending a message to the state management system saying, "This action happened, now update the state accordingly."

In all these cases, dispatching is about sending or directing something (an event, method call, or action) to the appropriate destination where it will be handled or processed. In programming, this concept is fundamental to organizing and managing the flow of control and data in an application.

## Children charectresitic

When multiple child components within the same context are using a context value, and one of them updates the state, the behavior regarding re-rendering depends on how the context is being used and the nature of the update.

1. Rerendering on State Update: When the value of a context changes (i.e., the value passed to the Provider's value prop changes), all components that are consuming this context will re-render. This is because the context value is a dependency for these components, and a change in the dependency triggers a re-render.

2. Efficiency Considerations: This behavior is efficient for scenarios where multiple components need to stay synchronized with the same data. However, it can lead to performance issues if the context is large and changes frequently, as it might cause unnecessary re-renders of many components.

## Related Topcs

- 03.Hooks/ContextHooks.md
- 04.Api/CreateContext
