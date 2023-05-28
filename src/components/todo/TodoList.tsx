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
      <div className=" mt-5">
        <ul>
          {todoData.map((todo) => {
            return (
              <li className="text-4xl mb-2 flex justify-between" key={todo.id}>
                <input
                  type="text"
                  value={todo.task}
                  onChange={(e) => onUpdateTodo(todo.id, e.target.value)}
                  onKeyDown={keydownHandler}
                />
                <Toggle todoInfo={todo} taskDone={onTaskDone} />
                <button onClick={() => onDeleteTodo(todo.id)}>delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
