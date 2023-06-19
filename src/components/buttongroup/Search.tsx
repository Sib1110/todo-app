import { useState } from "react";
import Searchbox from "./Searchbox";

interface Props {
  onFilterTodos: (text: string) => void;
  onClearQuery: () => void;
}

function Search({ onFilterTodos, onClearQuery }: Props) {
  const [isOpened, setIsOpened] = useState(false);

  const showSearchBoxHandler = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className="py-1 basis-1/5 text-center">
      {isOpened && (
        <Searchbox onFilterTodos={onFilterTodos} onClearQuery={onClearQuery} />
      )}
      <button
        className="hover:bg-red-500 py-1 px-5  rounded-full"
        onClick={showSearchBoxHandler}
      >
        검색
      </button>
    </div>
  );
}

export default Search;
