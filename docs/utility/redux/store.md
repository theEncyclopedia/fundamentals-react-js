# Redux store

The store is an object that brings actions and reducers together. It holds the application state, allows access to the state, and lets you dispatch actions.

## Key points

- Single Source of Truth: The store contains the whole state tree of the application, making Redux a single source of truth.
- Creation: Created using the createStore method, which takes a reducer, an initial state, and optionally enhancers.
- Methods: Important methods include getState() to access the current state, dispatch(action) to update the state, and subscribe(listener) to register listeners for state changes.
