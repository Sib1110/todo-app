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
    <div className="flex absolute justify-center -top-12 text-2xl md:text-3xl md:-top-[55px]  w-full pl-3 pr-1 md:justify-start md:ml-3 gap-1 md:h-full lg:w-1/2  md:bottom-20">
      <input
        className="bg-gray-300 pl-1 w-full md:w-2/3 border-2 rounded-lg  text-black"
        type="text"
        onCompositionEnd={(e) => onFilterTodos(e.data)}
        placeholder=" 2자 이상의 검색어를 입력해 주세요."
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
