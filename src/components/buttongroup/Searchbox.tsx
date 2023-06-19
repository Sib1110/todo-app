import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Props {
  onFilterTodos: (text: string) => void;
  onClearQuery: () => void;
}
function Searchbox({ onFilterTodos, onClearQuery }: Props) {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  return (
    <div className="flex fixed inset-x-20 bottom-20 justify-center gap-1">
      <input
        className="bg-gray-300 w-1/2 border-2 rounded-lg text-3xl text-black"
        type="text"
        onCompositionEnd={(e) => onFilterTodos(e.data)}
        autoFocus
      />
      <div
        className="cursor-pointer self-center"
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
        onClick={onClearQuery}
      >
        <FontAwesomeIcon
          className="text-black"
          icon={faRotateLeft}
          spin={isMouseEnter ? true : false}
          spinReverse
        />
      </div>
    </div>
  );
}

export default Searchbox;
