import Button from "../button/Button";

interface Props {
  onDeleteAllTodos: () => void;
}

function Reset({ onDeleteAllTodos }: Props) {
  return (
    <Button
      bgColor="bg-red-500 dark:bg-red-500"
      onClickHandler={() => onDeleteAllTodos()}
    >
      <span className="text-white">초기화</span>
    </Button>
  );
}
export default Reset;
