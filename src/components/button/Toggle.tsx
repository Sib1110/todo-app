import { Todo } from "../../types";

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
    <label className="relative group">
      <input
        type="checkbox"
        className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md cursor-pointer"
        onChange={checkHandler}
        checked={todoInfo.done}
      />
      <span
        className="w-8 h-5 md:w-16 md:h-10 flex items-center flex-shrink-0 ml-2 p-1  bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-sky-400 md:after:w-8 md:after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-100 
        after:w-4 after:h-4
        peer-checked:after:translate-x-2.5
      md:peer-checked:after:translate-x-6"
      ></span>
    </label>
  );
}

export default Toggle;
