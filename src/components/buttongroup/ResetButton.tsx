interface Props {
  onDeleteAllTodos: () => void;
}

function Reset({ onDeleteAllTodos }: Props) {
  return (
    <button
      className="border-3 bg-neutral-300 p-2 rounded-full text-2xl text-center"
      onClick={() => onDeleteAllTodos()}
    >
      초기화
    </button>
  );
}
export default Reset;
