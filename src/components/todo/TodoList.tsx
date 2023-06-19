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
    <ul className="w-1/2 px-10 flex-col h-[650px] mt-3 mb-10 overflow-y-scroll ">
      {todoData.map((todo) => {
        return (
          <li className="text-4xl mb-2 flex gap-5 justify-center" key={todo.id}>
            <input
              className={`basis-2/3 pl-3 rounded-xl ${
                todo.done ? "bg-sky-300" : ""
              }`}
              type="text"
              value={todo.task}
              onChange={(e) => onUpdateTodo(todo.id, e.target.value)}
              onKeyDown={keydownHandler}
            />
            <div className="flex items-baseline gap-3">
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
