import { Todo } from "../../todomodel";

interface Props {
  todoInfo: Todo;
  taskDone: (done: boolean, id: string) => void;
}

function Toggle({ todoInfo, taskDone }: Props) {
  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    todoInfo.done = isChecked;
    taskDone(todoInfo.done, todoInfo.id);
  };

  return (
    <input
      type="checkbox"
      role="switch"
      onChange={checkHandler}
      checked={todoInfo.done}
    />
  );
}

export default Toggle;
