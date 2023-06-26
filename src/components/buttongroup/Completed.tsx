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
        <span className="px-4 w-11 bg-red-400 rounded-full">{countTasks}</span>
      </div>
    </Button>
  );
}

export default Completed;
