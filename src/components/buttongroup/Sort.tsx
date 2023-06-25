import Button from "../button/Button";

interface Props {
  onSortTodos: () => void;
}

function Sort({ onSortTodos }: Props) {
  return (
    <Button>
      <button
        className="hover:bg-red-500 py-1 px-5  rounded-full"
        onClick={onSortTodos}
      >
        정렬
      </button>
    </Button>
  );
}

export default Sort;
