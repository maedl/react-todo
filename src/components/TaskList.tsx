import { ITaskListProps } from "../models/ITaskListProps";

export const TaskList = (props: ITaskListProps) => {
  const { todos, remove } = props;

  const handleRemove = (id: string) => {
    remove(id);
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.title}
          <button onClick={() => handleRemove(todo.id)}>Remove</button>
        </div>
      ))}
    </>
  );
};
