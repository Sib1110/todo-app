interface Props {
  onSortTodos: () => void;
}

function Sort({ onSortTodos }: Props) {
  return <button onClick={onSortTodos}>정렬</button>;
}

export default Sort;
