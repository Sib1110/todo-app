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
    <label className="relative flex justify-between items-center group p-2 text-xl ">
      <input
        type="checkbox"
        className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md cursor-pointer"
        onChange={checkHandler}
        checked={todoInfo.done}
      />
      <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1  bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-sky-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-100 peer-checked:after:translate-x-6"></span>
    </label>
  );
}

export default Toggle;
