interface Props {
  onSortTodos: () => void;
}

function Sort({ onSortTodos }: Props) {
  return (
    <div className="py-1 basis-1/5 text-center">
      <button
        className="hover:bg-red-500 py-1 px-5  rounded-full"
        onClick={onSortTodos}
      >
        정렬
      </button>
    </div>
  );
}

export default Sort;
