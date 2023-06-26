import Button from "../button/Button";

interface Props {
  onDeleteAllTodos: () => void;
}

function Reset({ onDeleteAllTodos }: Props) {
  return <Button onClickHandler={() => onDeleteAllTodos()}>초기화</Button>;
}
export default Reset;
