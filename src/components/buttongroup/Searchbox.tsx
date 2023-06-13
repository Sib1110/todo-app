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
    <div className="flex absolute bottom-20 w-full justify-center gap-1">
      <input
        className="bg-slate-500 w-1/2"
        type="text"
        onCompositionEnd={(e) => onFilterTodos(e.data)}
        autoFocus
      />
      <div
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
