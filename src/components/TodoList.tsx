import { Todo } from "../todomodel";
import Toggle from "./button/Toggle";

interface Props {
  todoData: Todo[];
  onTaskDone: (done: boolean, id: string) => void;
  onDeleteTodo: (id: string) => void;
}

function TodoList({ todoData, onTaskDone, onDeleteTodo }: Props) {
  return (
    <div className="flex">
      <ul>
        {todoData.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.task}
              <Toggle todoInfo={todo} taskDone={onTaskDone} />
              <button onClick={() => onDeleteTodo(todo.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
