# Built-in React Hooks

Hooks let you use different React Fatures from your components. You can either use the built-in Hooks or combine them to build your own.

In the context of React.js, a hook is a special function that allows you to use state and other React features in a functional componentsm wihtout having to write class component. Hooks were introduced in React 16.8 to make it easier to reuse state logic and side effects amoung compen

## State Hooks

React has a mechanism called the "Reconciliation Algorithm," which intelligently determines when the DOM should be updated. React does this by building a virtual DOM tree to represent the UI. When state or props change, React builds a new virtual DOM tree and then compares it with the previous one. After the comparison, React updates only the parts of the actual DOM that have changed. This ensures efficient rendering.

### React's reconciliation Algorithim

Local variables live only within the scope of the function and do not form part of the React component's state or props. When a local variable changes, React is not aware of this change and hence no re-rendering is triggered.

- **Local Variables**: Local variables live only within the scope of the function and do not form part of the React component's state or props. When a local variable changes, React is not aware of this change and hence no re-rendering is triggered.
- **State Variables**:
