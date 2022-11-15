import { Todo } from "../modals";

interface Props {
  completeTodoList: Todo[];
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function DisplayCompleteTodoList({
  completeTodoList,
  todoList,
  setTodoList,
}: Props) {
  const handleClickUndoneButton = (id: number) => {
    const newTodoList: Todo[] = todoList.map((singleTodo: Todo) => {
      return singleTodo.id === id
        ? { ...singleTodo, isCompleted: false }
        : { ...singleTodo };
    });
    setTodoList(newTodoList);
  };
  return (
    <>
      <div>
        {completeTodoList.map((singleTodo: Todo) => {
          return (
            <div key={singleTodo.id} className="flex">
              <div>{singleTodo.task}</div>
              <button
                onClick={() => {
                  handleClickUndoneButton(singleTodo.id);
                }}
                className="bg-rose-300"
              >
                Undone
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
