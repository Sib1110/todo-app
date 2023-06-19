interface Props {
  onDeleteAllTodos: () => void;
}

function Reset({ onDeleteAllTodos }: Props) {
  return (
    <div className="py-1">
      <button
        className="hover:bg-red-800 py-1 px-5 border-dotted rounded-full"
        onClick={() => onDeleteAllTodos()}
      >
        초기화
      </button>
    </div>
  );
}
export default Reset;
