interface Props {
  onSortTodos: () => void;
}

function Sort({ onSortTodos }: Props) {
  return (
    <div className="py-1">
      <button
        className="hover:bg-red-500 py-1 px-5 border-dotted rounded-full"
        onClick={onSortTodos}
      >
        정렬
      </button>
    </div>
  );
}

export default Sort;
