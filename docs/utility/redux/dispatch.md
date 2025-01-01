# Dispatch

Dispatch is a function available on the Redux store that is used to dispatch actions to the store. Calling dispatch and passing in an action triggers a state change.

## Key Points

- Triggering State Changes: The only way to trigger a state change is to dispatch an action.
- Middleware Interaction: Dispatch can be extended by middleware for handling asynchronous actions or logging.
