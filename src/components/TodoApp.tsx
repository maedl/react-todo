import { useState } from "react";
import { Todo } from "../models/Todo";
import { v4 as uuidv4 } from "uuid";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("test", false, uuidv4()),
  ]);

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.id}</div>
      ))}
    </>
  );
};
