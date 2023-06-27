import Button from "../button/Button";

interface Props {
  countTasks: number;
  onFilterDoneTodosHandler: () => void;
}

function Completed({ countTasks, onFilterDoneTodosHandler }: Props) {
  return (
    <Button onClickHandler={onFilterDoneTodosHandler}>
      <div className="flex flex-row justify-center gap-1">
        <span>완료한 목록</span>
        <div
          key={countTasks}
          className="w-10 bg-red-300 rounded-full animate-bump"
        >
          {countTasks}
        </div>
      </div>
    </Button>
  );
}

export default Completed;
