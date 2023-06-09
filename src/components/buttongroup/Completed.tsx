interface Props {
  countTasks: number;
  onFilterDoneTodosHandler: () => void;
}

function Completed({ countTasks, onFilterDoneTodosHandler }: Props) {
  return (
    <button onClick={onFilterDoneTodosHandler}>완료한 목록 {countTasks}</button>
  );
}

export default Completed;
