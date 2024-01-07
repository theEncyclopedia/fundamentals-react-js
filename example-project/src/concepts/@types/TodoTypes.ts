export interface Todo {
  id: number;
  text: string;
}

export type TodoAction =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "REMOVE_TODO"; payload: number };
