interface Props {
  onDeleteAllTodos: () => void;
}

function Reset({ onDeleteAllTodos }: Props) {
  return (
    <div className="py-1 basis-1/5 text-center">
      <button
        className="hover:bg-red-800 py-1 px-5  rounded-full"
        onClick={() => onDeleteAllTodos()}
      >
        초기화
      </button>
    </div>
  );
}
export default Reset;
