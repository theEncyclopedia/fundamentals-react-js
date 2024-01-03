# Built-in React Hooks

Hooks let you "hook into" react features such as state and lifecycle methods from your components. You can either use the built-in hooks or combine them to build your own.

In the context of React.js, a hook is a special function that allows you to use state and other React features in a functional components wihtout having to write class component. Hooks were introduced in React 16.8 to make it easier to reuse state logic and side effects amoung components.

## Functions vs Hooks

The difference between a hook and a function in React (and in general programming) lies in their purpose, usage, and behavior within the framework:

### Function

- **Purpose**: In the broader context of programming, a function is a reusable block of code designed to perform a particular task.
- **Usage**: Functions can be used anywhere in your code. They can be passed as props, returned from other functions, used as event handlers, etc.
- **Example**:

```javascript
  function myFunction() {
    ...
  }
```

- **Flexibility**: Functions are more flexible and are not specifically tied to any framework or library. unless they are explicitly designed to interact with them.
- **Naming convention**: Functions can have any name.

### React Hooks

- **Purpose**: Hooks are a feature specific to React that allow you to use state and other React features in functional components. They are used to "hook into" React's state and lifecycle features.
- **Usage**:
- **Example**:
- **Lifecycle Integration**:
- **Naming convention**: Any hook name in React must start with a prefix `use`.
