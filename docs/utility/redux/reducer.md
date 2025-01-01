# Reducer

A reducer is a pure function that takes the current state and an action as arguments and returns a new state. It's the only place where state updates occur in response to an action.

## Key points

- Pure Function: Must not have side-effects. It should only compute the new state based on the input state and action.
- Immutability: The state is immutable. Reducers must return new state objects instead of modifying existing ones.
- Handling Actions: Reducers interpret actions (described by type and payload) and decide how the state should change.
- Combining Reducers: For large applications, multiple reducers can be combined using combineReducers to manage different parts of the state tree.
- No mutationg object. If you touch it, you replace it.
- aim for the flattest option
- You have to return something and ideally, it should be the unchanged state if there is nothing you need to do it
