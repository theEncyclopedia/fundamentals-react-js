# Built-in React Hooks

Hooks let you use different React Features from your components. You can either use the built-in Hooks or combine them to build your own.

In the context of React.js, a hook is a special function that allows you to use state and other React features in a functional componentsm wihtout having to write class component. Hooks were introduced in React 16.8 to make it easier to reuse state logic and side effects amoung compen

## State Hooks

React has a mechanism called the "Reconciliation Algorithm," which intelligently determines when the DOM should be updated. React does this by building a virtual DOM tree to represent the UI. When state or props change, React builds a new virtual DOM tree and then compares it with the previous one. After the comparison, React updates only the parts of the actual DOM that have changed. This ensures efficient rendering.

### Local variables vs State variable

- **Local Variables**: Local variables live only within the scope of the function and do not form part of the React component's state or props. When a local variable changes, React is not aware of this change and hence no re-rendering is triggered.

  ```js
  import { sculptureList } from "./data.js";
  export default function Gallery() {
    let index = 0;

    function handleClick() {
      index = index + 1;
    }

    let sculpture = sculptureList[index];
    return (
      <>
        <button onClick={handleClick}>Next</button>
        <h2>
          <i>{sculpture.name} </i>
          by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <img src={sculpture.url} alt={sculpture.alt} />
        <p>{sculpture.description}</p>
      </>
    );
  }
  ```

- **State Variables**: State variables are designed to be managed by React itself. When you change the state using `setState()` in class compoenents or `useState()`'s setter function in function compoinents, you are signaling to React that a state change has occurred. React then schedules a re-render and the UI is updated based on the new state during that re-render. State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.

In a sense, React’s state variables serve as a source of truth for the component, telling React when it needs to re-render. The component listens for changes to these special variables, whereas it doesn't do so for local variables.

#### Summary

- **State Variables:** Integrated into React's architecture. A change in state is a signal to React that the component may need to be re-rendered, triggering the Reconciliation Algorithm.

- **Local Variables:** Not integrated into React’s rendering logic. They exist in the function's scope and do not signal anything to React's reconciliation process.

### React's reconciliation Algorithim

The reconciliation algorithm is the process React uses to update the DOM in response to changes in the component state. When a component’s state changes, React will re-render the component and its children. The reconciliation algorithm is responsible for determining what has changed in the component tree and updating the DOM accordingly.

The reconciliation algorithm starts by comparing the virtual DOM of the previous state with the virtual DOM of the new state. If there are no differences, React will not make any changes to the real DOM. If there are differences, React will update the real DOM to match the new state.

### Conclusion

- Use a state variable when a component needs to "remember" some information between multiple renders or something that triggers re-rendering.

## Context Hooks

## Ref Hooks

## Effect Hooks

## Performance Hooks

## Resource Hooks

## Other hooks
