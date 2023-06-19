interface Props {
  countTasks: number;
  onFilterDoneTodosHandler: () => void;
}

function Completed({ countTasks, onFilterDoneTodosHandler }: Props) {
  return (
    <div className="hover:bg-red-500 my-1 px-5 rounded-full justify-center basis-1/5 flex items-center gap-2">
      <div key={countTasks} className="animate-bump">
        <button onClick={onFilterDoneTodosHandler}>
          완료한 목록 {countTasks}
        </button>
      </div>
    </div>
  );
}

export default Completed;
