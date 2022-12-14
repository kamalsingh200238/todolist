"use client";

import { Todo } from "../modals";
import { useEffect, useState } from "react";
import InputTodo from "../components/InputTodo";
import DisplayIncompleteTodoList from "../components/DisplayIncompleteTodoList";
import DisplayCompleteTodoList from "../components/DisplayCompleteTodoList";

export default function Home() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [completeTodoList, setCompleteTodoList] = useState<Todo[]>([]);
  const [incompleteTodoList, setIncompleteTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    // create new variables
    const newCompletedTodolist: Todo[] = [];
    const newIncompletedTodolist: Todo[] = [];

    // map the todolist
    todoList.map((singleTodo: Todo) => {
      //check if task is completed
      if (singleTodo.isCompleted) {
        // if completed add the todo in newly created completeTodoList
        newCompletedTodolist.push(singleTodo);
      } else {
        // otherwise add the todo in newly created incompleteTodoList
        newIncompletedTodolist.push(singleTodo);
      }
    });
    // then add the value in state
    setCompleteTodoList(newCompletedTodolist);
    setIncompleteTodoList(newIncompletedTodolist);
  }, [todoList]);
  return (
    <main className="">
      <InputTodo setTodoList={setTodoList} />
      <div className="grid grid-cols-2 gap-12">
        <DisplayIncompleteTodoList
          todoList={todoList}
          incompleteTodoList={incompleteTodoList}
          setTodoList={setTodoList}
        />
        <DisplayCompleteTodoList
          todoList={todoList}
          completeTodoList={completeTodoList}
          setTodoList={setTodoList}
        />
      </div>
    </main>
  );
}
