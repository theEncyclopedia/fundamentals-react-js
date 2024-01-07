# React Context

Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props. This is particularly useful when you have data that needs to be accessible by many components at different nesting levels.

Here's a brief overview of how React Context works:

1.Create a Context: You first create a new context using React.createContext(). This returns a context object with two components: Provider and Consumer.

```javascript

```

2.Provider Component: This component is used to wrap a part of your application where you want the context to be accessible. You can pass the data you want to share (known as "context value") to the Provider as a prop.

```javascript
// ThemeContext.js
import React from "react";

const ThemeContext = React.createContext("light"); // Default value is 'light'
export default ThemeContext;
```

3.Consumer Component: This component is used in any descendant of the Provider component when you want to access the context value. React also offers a useContext hook for function components to consume context values more easily.

```javascript

```

4.Updating Context Values: Context values can be updated using state or props in the component that renders the Provider. All consumers that are descendants of the Provider will re-render when the context value changes.

```javascript

```

It's important to note that while Context is a powerful tool, it should be used sparingly as it can make component reusability more difficult and can lead to over-rendering issues if not managed properly. For many applications, state management libraries like Redux or MobX might be a more appropriate choice for managing global state.

## Related Topcs

- 03.Hooks/ContextHooks.md
- 04.Api/CreateContext
