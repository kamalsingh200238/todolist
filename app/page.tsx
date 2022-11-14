"use client";

import { Todo } from "../modals";
import { useEffect, useState } from "react";
import InputTodo from "../components/InputTodo";
import styles from "./page.module.css";

export default function Home() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [completeTodoList, setCompleteTodoList] = useState<Todo[]>([]);
  const [incompleteTodoList, setIncompleteTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    const newCompletedTodolist: Todo[] = [];
    const newIncompletedTodolist: Todo[] = [];

    todoList.map((singleTodo: Todo) => {
      if (singleTodo.isCompleted) {
        newCompletedTodolist.push(singleTodo);
      } else {
        newIncompletedTodolist.push(singleTodo);
      }
    });

    setCompleteTodoList(newCompletedTodolist);
    setIncompleteTodoList(newIncompletedTodolist);
  }, [todoList]);
  return (
    <main className={styles.container}>
      <InputTodo setTodoList={setTodoList} />
    </main>
  );
}
