import { ITaskListProps } from "../models/ITaskListProps";

export const TaskList = (props: ITaskListProps) => {
  const { todos } = props;

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </>
  );
};
