import Search from "./Search";
import Sort from "./Sort";
import Completed from "./Completed";
import Darkmode from "./Darkmode";
import Reset from "./Reset";

interface Props {
  onDeleteAllTodos: () => void;
  onFilterTodos: (text: string) => void;
  onSortTodos: () => void;
  countTasks: number;
  onFilterDoneTodosHandler: () => void;
  onClearQuery: () => void;
  onDarkmode: () => void;
  darkmodeOpen: boolean;
}

function ButtonGroup({
  onDeleteAllTodos,
  onFilterTodos,
  onSortTodos,
  countTasks,
  onFilterDoneTodosHandler,
  onClearQuery,
  onDarkmode,
  darkmodeOpen,
}: Props) {
  console.log(darkmodeOpen);
  return (
    <div className="flex flex-col fixed bottom-0 w-full px-1 pb-1 md:flex md:flex-row text-black dark:text-slate-200 text-lg md:text-3xl">
      <Search onFilterTodos={onFilterTodos} onClearQuery={onClearQuery} />
      <Sort onSortTodos={onSortTodos} />
      <Completed
        countTasks={countTasks}
        onFilterDoneTodosHandler={onFilterDoneTodosHandler}
      />
      <Darkmode onDarkmode={onDarkmode} darkmodeOpen={darkmodeOpen} />
      <Reset onDeleteAllTodos={onDeleteAllTodos} />
    </div>
  );
}

export default ButtonGroup;
