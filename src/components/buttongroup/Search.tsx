import { useState } from "react";
import Searchbox from "./Searchbox";
import Button from "../button/Button";

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
    <Button>
      {isOpened && (
        <Searchbox onFilterTodos={onFilterTodos} onClearQuery={onClearQuery} />
      )}
      <button
        className="hover:bg-red-500 py-1 px-5  rounded-full"
        onClick={showSearchBoxHandler}
      >
        검색
      </button>
    </Button>
  );
}

export default Search;
