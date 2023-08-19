import { ChangeEvent, useState } from "react";
import { IAddTodoFormProps } from "../models/IAddTodoFormProps";

export const AddTodoForm = (props: IAddTodoFormProps) => {
  const [userInput, setUserInput] = useState("");
  const { addTodo } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleAddTodo = (todoTitle: string) => {
    addTodo(todoTitle);
    setUserInput("");
  };

  return (
    <>
      <input type="text" value={userInput} onChange={handleChange} />
      <button onClick={() => handleAddTodo(userInput)}>Add</button>
    </>
  );
};
