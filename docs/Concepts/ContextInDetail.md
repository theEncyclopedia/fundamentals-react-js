# Context in detail

You can provide the initial state directly in createContext, but it should be done with an understanding of how it affects your component's behavior. When you provide an initial state, any component using this context outside of a TodoProvider will receive this initial state instead of undefined.

```typescript
const TodoContext = createContext<TodoContextType | undefined>(undefined);
```

This might seem like a good idea, as it can prevent the need for null checks, but it can potentially lead to bugs that are hard to detect. A component might incorrectly assume it's within a properly configured provider and try to operate on this initial state, leading to unexpected behavior.

Using `undefined` as the default value and then checking for `undefined` in the consuming components (as done previously) makes it clear when the context is used incorrectly. It forces developers to handle the error case where the context is used outside of its intended scope, leading to more robust and maintainable code.
