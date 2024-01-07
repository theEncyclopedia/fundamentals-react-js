import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { Todo, TodoAction } from "../../@types/TodoTypes";

// Initial State
interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

// Reducer Function
function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}

// Create Context
interface TodoContextType {
  state: TodoState;
  dispatch: Dispatch<TodoAction>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

function TodoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
