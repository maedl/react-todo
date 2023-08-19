import { Todo } from "./Todo";

export interface ITaskListProps {
  todos: Todo[];
  remove: (id: string) => void;
  toggle: (id: string) => void;
}
