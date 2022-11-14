"use client";

import { Todo } from "../modals";
import { useState } from "react";
import Image from "next/image";
import InputTodo from "../components/InputTodo";
import styles from "./page.module.css";

export default function Home() {
  const [todolist, setTodolist] = useState<Todo[]>([]);
  return (
    <main className={styles.container}>
      <InputTodo setTodolist={setTodolist} />
    </main>
  );
}
