interface Props {
  onDeleteAllTodos: () => void;
}

function Reset({ onDeleteAllTodos }: Props) {
  return <button onClick={() => onDeleteAllTodos()}>초기화</button>;
}
export default Reset;
