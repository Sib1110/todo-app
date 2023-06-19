interface Props {
  countTasks: number;
  onFilterDoneTodosHandler: () => void;
}

function Completed({ countTasks, onFilterDoneTodosHandler }: Props) {
  return (
    <div className="py-1">
      <button
        className="hover:bg-red-500 py-1 px-5 border-dotted rounded-full"
        onClick={onFilterDoneTodosHandler}
      >
        완료한 목록 {countTasks}
      </button>
    </div>
  );
}

export default Completed;
