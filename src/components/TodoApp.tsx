import { useState } from "react";
import { Todo } from "../models/Todo";
import { v4 as uuidv4 } from "uuid";
import { TaskList } from "./TaskList";
import { AddTodoForm } from "./AddTodoForm";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (id: string) => {
    setTodos([...todos, new Todo(id, false, uuidv4())]);
  };

  const handleRemove = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, done: !todo.done };
        } else return todo;
      })
    );
  };

  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <TaskList todos={todos} remove={handleRemove} toggle={handleToggle} />
    </>
  );
};
