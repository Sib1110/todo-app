import Darkmode from "./Darkmode";
import ResetButton from "./ResetButton";

interface Props {
  onDeleteAllTodos: () => void;
}

function ButtonGroup({ onDeleteAllTodos }: Props) {
  return (
    <div className="fixed bottom-2 right-2">
      <Darkmode />
      <ResetButton onDeleteAllTodos={onDeleteAllTodos} />
    </div>
  );
}

export default ButtonGroup;
