import { ITaskListProps } from "../models/ITaskListProps";

export const TaskList = (props: ITaskListProps) => {
  const { todos, remove, toggle } = props;

  const handleRemove = (id: string) => {
    remove(id);
  };

  const handleChange = (id: string) => {
    toggle(id);
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => {
              handleChange(todo.id);
            }}
          ></input>
          <span
            className={todo.done ? "done" : ""}
            onClick={() => {
              handleChange(todo.id);
            }}
          >
            {todo.title}
          </span>
          <button onClick={() => handleRemove(todo.id)}>Remove</button>
        </div>
      ))}
    </>
  );
};
