"use client";
import { useState } from "react";
import { Todo } from "../modals";

interface Props {
  setTodolist: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const InputTodo = ({ setTodolist }: Props) => {
  // state for input field
  const [todo, setTodo] = useState<string>("");
  const handleTodoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleTodoFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      setTodolist((prev: Todo[]) => [
        ...prev,
        { id: Date.now(), isCompleted: false, task: todo },
      ]);
    }
  };

  return (
    <>
      <form onSubmit={handleTodoFormSubmit}>
        <label htmlFor="todo-input"></label>
        <input
          id="todo-input"
          type="text"
          value={todo}
          onChange={handleTodoInputChange}
          placeholder="write a todo"
        />
      </form>
    </>
  );
};

export default InputTodo;