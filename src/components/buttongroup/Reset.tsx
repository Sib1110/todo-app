import Button from "../button/Button";

interface Props {
  onDeleteAllTodos: () => void;
}

function Reset({ onDeleteAllTodos }: Props) {
  return (
    <Button>
      <button
        className="hover:bg-red-800 py-1 px-5  rounded-full"
        onClick={() => onDeleteAllTodos()}
      >
        초기화
      </button>
    </Button>
  );
}
export default Reset;
