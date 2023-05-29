interface Props {
  onDeleteAllTodos: () => void;
}

function Reset({ onDeleteAllTodos }: Props) {
  return <button onClick={() => onDeleteAllTodos()}></button>;
}
export default Reset;
