import Button from "../button/Button";

interface Props {
  onSortTodos: () => void;
}

function Sort({ onSortTodos }: Props) {
  return <Button onClickHandler={onSortTodos}>정렬</Button>;
}

export default Sort;
