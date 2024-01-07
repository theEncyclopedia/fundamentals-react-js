import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "../../@types/TodoTypes";

const TodoMainSection = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoComponent must be used within a TodoProvider");
  }

  const [newTodo, setNewTodo] = useState<string>("");
  const { state, dispatch } = todoContext;

  const addTodo = () => {
    if (newTodo.trim() === "") {
      return;
    }

    dispatch({
      type: "ADD_TODO",
      payload: { id: Date.now(), text: newTodo },
    });

    setNewTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      {state.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

function TodoItem({ todo }: { todo: Todo }) {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoComponent must be used within a TodoProvider");
  }

  const { dispatch } = todoContext;

  return (
    <div>
      {todo.text}
      <button
        onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}>
        Remove
      </button>
    </div>
  );
}

export default TodoMainSection;
