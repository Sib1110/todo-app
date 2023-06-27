import { Todo } from "../../todomodel";
import Toggle from "../button/Toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

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
    <ul className="w-full h-screen pl-3 pr-1 text-lg lg:w-2/3 md:px-10 md:text-4xl flex-col mt-3 mb-10 overflow-y-scroll">
      {todoData.map((todo) => {
        return (
          <li
            className="mb-2 py-1 flex md:gap-5 justify-center drop-shadow-md"
            key={todo.id}
          >
            <input
              className={`basis-4/5 pl-3 rounded-xl ${
                todo.done ? "bg-sky-300" : ""
              }`}
              type="text"
              value={todo.task}
              onChange={(e) => onUpdateTodo(todo.id, e.target.value)}
              onKeyDown={keydownHandler}
            />
            <div className="flex items-end gap-1 md:items-baseline md:gap-3 text-lg md:text-4xl dark:text-white">
              <Toggle todoInfo={todo} taskDone={onTaskDone} />
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faTrashCan}
                onClick={() => onDeleteTodo(todo.id)}
                onMouseEnter={(e) =>
                  e.currentTarget.classList.add("text-red-500")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("text-red-500")
                }
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
