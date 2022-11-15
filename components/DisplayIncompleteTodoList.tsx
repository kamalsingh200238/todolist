import { Todo } from "../modals";

interface Props {
  incompleteTodoList: Todo[];
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function DisplayIncompleteTodoList({
  incompleteTodoList,
  todoList,
  setTodoList,
}: Props) {
  const handleClickDoneButton = (id: number) => {
    const newTodoList: Todo[] = todoList.map((singleTodo: Todo) => {
      return singleTodo.id === id
        ? { ...singleTodo, isCompleted: true }
        : { ...singleTodo };
    });
    setTodoList(newTodoList);
  };
  return (
    <>
      <div>
        {incompleteTodoList.map((singleTodo: Todo) => {
          return (
            <div key={singleTodo.id} className="flex">
              <div>{singleTodo.task}</div>
              <button
                onClick={() => {
                  handleClickDoneButton(singleTodo.id);
                }}
                className="bg-rose-300"
              >
                Done
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
