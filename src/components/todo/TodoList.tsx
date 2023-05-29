import { Todo } from "../../todomodel";
import Toggle from "../button/Toggle";

interface Props {
  todoData: Todo[];
  onTaskDone: (done: boolean, id: string) => void;
  onDeleteTodo: (id: string) => void;

  onUpdateTodo: (id: string, task: string) => void;
}

function TodoList({ todoData, onTaskDone, onDeleteTodo, onUpdateTodo }: Props) {
  const keydownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };

  return (
    <>
      <ul className="flex-col mt-5 w-1/2 items-center">
        {todoData.map((todo) => {
          return (
            <li className="text-4xl mb-2 flex gap-5" key={todo.id}>
              <input
                className={`basis-2/3 ${todo.done ? "bg-sky-500" : ""}`}
                type="text"
                value={todo.task}
                onChange={(e) => onUpdateTodo(todo.id, e.target.value)}
                onKeyDown={keydownHandler}
              />
              <div className="basis-1/3 flex gap-3">
                <Toggle todoInfo={todo} taskDone={onTaskDone} />
                <button onClick={() => onDeleteTodo(todo.id)}>delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
